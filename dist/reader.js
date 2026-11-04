"use strict";

const $ = (id) => document.getElementById(id);
const storageKey = "malayalam-every-day-v1";
const defaults = { done: [], anchor: "", scroll: 0 };

function readState() {
  try {
    const previous = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return { ...defaults, ...previous };
  } catch {
    return { ...defaults };
  }
}

const state = readState();
const done = new Set(Array.isArray(state.done) ? state.done : []);
const contexts = new Map();
let activeAnchor = "pronunciation";
let returnScroll = 0;
let activeQuestion = null;
const threads = new Map();
let tutorAccess;
let askedFrom = null;
let reading = true;
let scrollTimer;

function save() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({ ...state, done: [...done] }));
  } catch {
    // Reading still works when storage is disabled.
  }
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function link(label, anchor, className) {
  const node = element("a", className, label);
  node.href = "#" + anchor;
  return node;
}

function button(label, className, action) {
  const node = element("button", className, label);
  node.type = "button";
  node.addEventListener("click", action);
  return node;
}

function disclosure(label, answer, className) {
  const details = element("details", className);
  details.append(element("summary", "", label), element("p", "malayalam", answer));
  return details;
}

function renderNavigation(target) {
  target.append(link("Pronunciation", "pronunciation", "nav-start"), link("Meet the cast", "cast", "nav-start"));
  book.forEach((chapter, i) => {
    const group = element("details", "nav-group");
    const summary = element("summary");
    summary.append(element("span", "chapter-digit", String(i + 1).padStart(2, "0")), element("span", "", chapter.title));
    group.append(summary, link("Dialogue", chapter.id));
    for (const topic of chapter.lessons) group.append(link(topic.title, topic.id));
    target.append(group);
  });
  target.append(link("Final review", "review", "nav-start"));
}

function renderChapter(chapter, i) {
  const section = element("section", "chapter");
  section.id = chapter.id;
  const cover = element("header", "chapter-heading");
  const heading = element("div");
  const title = element("h2", "", chapter.title);
  title.id = chapter.id + "-title";
  section.setAttribute("aria-labelledby", title.id);
  heading.append(element("p", "eyebrow", "CHAPTER " + String(i + 1).padStart(2, "0")), title, element("p", "", chapter.intro));
  const artFrame = element("div", "panel panel-" + chapter.scene);
  const art = element("img");
  art.src = "assets/scenes.webp?v=3";
  art.alt = chapter.alt;
  art.loading = "lazy";
  art.width = 1254;
  art.height = 1254;
  artFrame.append(art);
  cover.append(heading, artFrame);
  const body = element("div", "chapter-body");
  const dialogueTitle = element("h3", "", "The dialogue");
  const dialogue = element("div", "dialogue");
  const context = { title: chapter.title + " · Dialogue", chapter, note: "Read the exchange once, then reveal any translations you need." };
  contexts.set(chapter.id, context);
  chapter.dialogue.forEach(([speaker, line, translation], j) => {
    const row = element("div", "dialogue-row");
    row.id = chapter.id + "-line-" + (j + 1);
    const words = element("div", "dialogue-words");
    const translate = element("details", "translation");
    translate.append(element("summary", "", "English"), element("p", "", translation));
    words.append(element("p", "malayalam", line), translate);
    const nearby = chapter.dialogue.slice(Math.max(0, j - 1), j + 2);
    contexts.set(row.id, { ...context, line, translation, speaker, nearby });
    const ask = button("✦", "ask-line", () => openAsk(row.id));
    ask.setAttribute("aria-label", "Ask AI about " + speaker + "’s line: " + line);
    row.append(element("span", "speaker speaker-" + speaker.toLowerCase(), speaker), words, ask);
    dialogue.append(row);
  });
  const glosses = element("dl", "glosses");
  for (const [word, translation] of chapter.words) {
    const pair = element("div");
    pair.append(element("dt", "", word), element("dd", "", translation));
    glosses.append(pair);
  }
  const wordList = element("details", "chapter-words");
  wordList.append(element("summary", "", "Words from this scene"), glosses);
  body.append(dialogueTitle, dialogue, wordList);
  chapter.lessons.forEach((topic, j) => body.append(renderLesson(topic, chapter, i, j)));
  const next = book[i + 1];
  body.append(link(next ? "Next chapter · " + next.title + " →" : "Go to final review →", next?.id || "review", "next text-link"));
  section.append(cover, body);
  return section;
}

function renderLesson(topic, chapter, i, j) {
  const section = element("section", "lesson");
  section.id = topic.id;
  const context = { title: topic.title, chapter, topic, note: topic.note };
  contexts.set(topic.id, context);
  const header = element("div", "lesson-head");
  header.append(element("p", "eyebrow", "GRAMMAR " + (i + 1) + "." + (j + 1)),
    button("✦ Ask AI", "outline", () => openAsk(topic.id)));
  const title = element("h3", "", topic.title);
  title.id = topic.id + "-title";
  section.setAttribute("aria-labelledby", title.id);
  const exampleList = element("div", "example-list");
  topic.examples.forEach(([line, translation], n) => {
    const row = element("div", "example");
    row.id = topic.id + "-example-" + (n + 1);
    contexts.set(row.id, { ...context, line, translation });
    const words = element("div");
    words.append(element("p", "malayalam", line), element("p", "english", translation));
    const ask = button("✦", "ask-line", () => openAsk(row.id));
    ask.setAttribute("aria-label", "Ask AI about " + line);
    row.append(words, ask);
    exampleList.append(row);
  });
  const practice = element("div", "practice");
  practice.append(element("h4", "", "Your turn"));
  topic.drills.forEach(([prompt, answer]) => practice.append(disclosure(prompt, answer, "drill")));
  const complete = button("", "outline complete", () => {
    if (done.has(topic.id)) done.delete(topic.id);
    else done.add(topic.id);
    paintComplete();
    updateProgress();
    save();
  });
  function paintComplete() {
    const checked = done.has(topic.id);
    complete.textContent = checked ? "✓ Completed" : "Mark complete";
    complete.setAttribute("aria-pressed", String(checked));
  }
  paintComplete();
  const breakdown = element("div", "breakdown");
  const pieces = element("dl");
  for (const [form, gloss] of breakdowns[topic.id]) {
    const piece = element("div");
    piece.append(element("dt", "", form), element("dd", "", gloss));
    pieces.append(piece);
  }
  breakdown.append(element("h4", "", "Break down the first example"), pieces);
  section.append(header, title, element("p", "pattern", topic.pattern), element("p", "", topic.explain),
    exampleList, breakdown, element("p", "note", topic.note), practice, complete);
  return section;
}

function updateProgress() {
  $("progress").value = done.size;
  $("progress-label").textContent = done.size + " of 24 lessons complete";
}

const review = [
  ["Ask a friend “Is this your bag?”", "idhuh ninde bag aanoo?"],
  ["Ask where Siddharth is.", "Siddharth evide aanuh?"],
  ["Decline coffee and say that tea will do.", "kaappi veenda. chaaya madhi."],
  ["Say you drink tea every day.", "njaan divasavum chaaya kudikkum."],
  ["Tell a friend you didn’t drink coffee.", "njaan kaappi kudicchilla."],
  ["Suggest meeting at six tomorrow.", "naale aaru manikku kaanaam?"],
  ["Ask whether your friend can come in the evening.", "ninakku vaikeettu varaan pattumoo?"],
  ["Say that if it isn’t raining, you’ll come.", "mazha illa engil, njaan varum."]
];

const pronunciationContext = {
  title: "How to say it",
  note: "Long vowels use double letters. Some familiar consonants share a spelling, with a tongue-placement note when helpful.",
  line: "njaan Rahul aanuh.",
  translation: "I’m Rahul."
};
contexts.set("pronunciation", pronunciationContext);
contexts.set("cast", {
  title: "Meet the cast", note: "Kirti is Kevin’s older sister. He can call her cheechi. Nee is a familiar form of ‘you.’",
  line: "chaaya veenoo?", translation: "Would you like tea?"
});
contexts.set("review", { title: "Put it together", note: "The review combines one construction from each chapter.", line: review[5][1], translation: review[5][0] });

renderNavigation($("contents"));
renderNavigation($("mobile-nav"));
book.forEach((chapter, i) => $("chapters").append(renderChapter(chapter, i)));
review.forEach(([prompt, answer]) => $("review-drills").append(disclosure(prompt, answer, "drill")));
updateProgress();

const sections = [...document.querySelectorAll("#pronunciation, #cast, .chapter, .lesson, #review")];

function setActive(anchor) {
  if (activeAnchor === anchor && document.querySelector("[aria-current='location']")) return;
  activeAnchor = anchor;
  for (const nav of [$("contents"), $("mobile-nav")]) {
    for (const item of nav.querySelectorAll("a")) {
      if (item.hash === "#" + anchor) {
        item.setAttribute("aria-current", "location");
        const group = item.closest("details");
        if (group) group.open = true;
      } else {
        item.removeAttribute("aria-current");
      }
    }
  }
}

function rememberPosition() {
  if (!reading) return;
  const offset = $("read-tab").closest("header").getBoundingClientRect().bottom + 105;
  const section = sections.findLast((item) => item.getBoundingClientRect().top <= offset);
  setActive(section?.id || "pronunciation");
  if (window.scrollY > 160) {
    state.anchor = section?.id || "pronunciation";
    state.scroll = window.scrollY;
    save();
  }
}

window.addEventListener("scroll", () => {
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(rememberPosition, 85);
}, { passive: true });
window.addEventListener("pagehide", rememberPosition);

const initialAnchor = location.hash.slice(1);
if (state.anchor && document.getElementById(state.anchor)) {
  $("resume").href = "#" + state.anchor;
  $("resume").hidden = false;
}
requestAnimationFrame(() => {
  if (initialAnchor && $(initialAnchor)) $(initialAnchor).scrollIntoView();
  else if (state.scroll > 0) window.scrollTo(0, state.scroll);
  rememberPosition();
});

function closeDrawer() {
  if ($("mobile-contents").open) $("mobile-contents").close();
}
$("contents-toggle").addEventListener("click", () => {
  if (!$("mobile-contents").open) $("mobile-contents").showModal();
});

document.addEventListener("click", (event) => {
  const anchor = event.target.closest('a[href^="#"]');
  if (!anchor || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const target = $(anchor.hash.slice(1));
  if (!target) return;
  event.preventDefault();
  closeDrawer();
  if (!reading) showRead(false);
  if (location.hash !== anchor.hash) history.pushState(null, "", anchor.hash);
  target.scrollIntoView();
  rememberPosition();
});

window.addEventListener("hashchange", () => {
  if (!reading) showRead(false);
  $(location.hash.slice(1))?.scrollIntoView();
  rememberPosition();
});

function openAsk(anchor = activeAnchor) {
  const context = contexts.get(anchor) || pronunciationContext;
  if (reading) {
    returnScroll = window.scrollY;
    askedFrom = document.activeElement;
  }
  if (activeQuestion !== context) $("question").value = "";
  activeQuestion = context;
  reading = false;
  closeDrawer();
  $("book-shell").hidden = true;
  $("ask-view").hidden = false;
  $("read-tab").setAttribute("aria-pressed", "false");
  $("ask-tab").setAttribute("aria-pressed", "true");
  $("context-title").textContent = context.title;
  $("context-line").textContent = context.line || context.topic?.pattern || context.chapter?.intro || "";
  $("context-note").querySelector("p").textContent = context.note;
  $("context-note").open = false;
  paintTutor();
  checkTutor();
  window.scrollTo(0, 0);
  $("ask-view").focus({ preventScroll: true });
}

function showRead(restore = true) {
  if (reading) return;
  reading = true;
  $("ask-view").hidden = true;
  $("book-shell").hidden = false;
  $("read-tab").setAttribute("aria-pressed", "true");
  $("ask-tab").setAttribute("aria-pressed", "false");
  if (restore) {
    window.scrollTo(0, returnScroll);
    if (askedFrom?.isConnected) askedFrom.focus({ preventScroll: true });
  }
}

$("ask-tab").addEventListener("click", () => { if (reading) openAsk(); });
$("read-tab").addEventListener("click", () => showRead());
$("back-to-passage").addEventListener("click", () => showRead());
function getThread(ctx) {
  if (!threads.has(ctx)) threads.set(ctx, { messages: [], busy: false, error: "" });
  return threads.get(ctx);
}

function paintTutor() {
  if (!activeQuestion) return;
  const thread = getThread(activeQuestion);
  const messages = thread.messages.map(({ role, text }) => {
    const bubble = element("article", "tutor-message tutor-" + role);
    const label = { user: "You", assistant: "Tutor", note: "From the book" };
    bubble.append(element("strong", "", label[role]), element("p", "", text));
    return bubble;
  });
  $("tutor-messages").replaceChildren(...messages);
  $("ask-form").hidden = tutorAccess !== "ready";
  $("ask-send").disabled = thread.busy;
  $("tutor-status").textContent = thread.error || (thread.busy
    ? "Working on your answer…"
    : tutorAccess === "ready" ? "" : "Live AI is awaiting setup. The lesson help above works here now.");
  if (tutorAccess === "sign-in") {
    const signIn = element("a", "text-link", "Sign in to use Ask AI");
    signIn.href = "/signin-with-chatgpt?return_to=" + encodeURIComponent(location.pathname + location.hash);
    $("tutor-status").replaceChildren(signIn);
  }
}

async function checkTutor() {
  if (tutorAccess) return;
  tutorAccess = "checking";
  try {
    const response = await fetch("/api/tutor", { headers: { Accept: "application/json" } });
    const body = await response.json();
    tutorAccess = ["ready", "sign-in"].includes(body.state) ? body.state : "offline";
  } catch {
    tutorAccess = "offline";
  }
  paintTutor();
}

function showBookHelp(kind) {
  const ctx = activeQuestion;
  if (!ctx) return;
  const thread = getThread(ctx);
  const topic = ctx.topic;
  const chapter = ctx.chapter;
  let answer;
  if (kind === "meaning") {
    answer = ctx.line
      ? ctx.line + " — " + ctx.translation
      : topic ? topic.examples[0].join(" — ") : chapter.dialogue.map((turn) => turn.slice(1).join(" — ")).join("\n");
  } else if (kind === "grammar") {
    answer = topic
      ? topic.pattern + "\n\n" + topic.explain
      : chapter ? chapter.lessons.map((lesson) => lesson.title + " · " + lesson.pattern).join("\n") : ctx.note;
  } else {
    const examples = topic?.examples || chapter?.lessons[0].examples;
    answer = examples ? examples.slice(1, 3).map((row) => row.join(" — ")).join("\n") : ctx.note;
  }
  thread.messages.push({ role: "note", text: answer });
  paintTutor();
}

$("show-meaning").addEventListener("click", () => showBookHelp("meaning"));
$("show-grammar").addEventListener("click", () => showBookHelp("grammar"));
$("show-examples").addEventListener("click", () => showBookHelp("examples"));

$("ask-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const ctx = activeQuestion;
  const question = $("question").value.trim();
  if (tutorAccess !== "ready" || !question || !ctx) return;
  const thread = getThread(ctx);
  if (thread.busy) return;
  const turn = { role: "user", text: question };
  thread.busy = true;
  thread.error = "";
  thread.messages.push(turn);
  $("question").value = "";
  paintTutor();
  try {
    const response = await fetch("/api/tutor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        passage: { title: ctx.title, line: ctx.line, translation: ctx.translation, note: ctx.note,
          pattern: ctx.topic?.pattern, explain: ctx.topic?.explain, nearby: ctx.nearby,
          examples: ctx.topic?.examples, dialogue: ctx.line ? undefined : ctx.chapter?.dialogue },
        messages: thread.messages.filter(({ role }) => role !== "note").slice(-9)
      })
    });
    const result = await response.json();
    if (!response.ok || typeof result.answer !== "string" || !result.answer.trim()) {
      throw new Error(result.error || "The tutor couldn’t answer just now. Try again.");
    }
    thread.messages.push({ role: "assistant", text: result.answer });
  } catch (error) {
    thread.messages.splice(thread.messages.indexOf(turn), 1);
    thread.error = error.message || "The tutor couldn’t answer just now. Try again.";
    if (activeQuestion === ctx && !$("question").value) $("question").value = question;
  } finally {
    thread.busy = false;
    if (activeQuestion === ctx) paintTutor();
  }
});
