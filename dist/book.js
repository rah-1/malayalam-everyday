const lesson = (id, title, pattern, explain, note, examples, drills) =>
  ({ id, title, pattern, explain, note, examples, drills });

const breakdowns = {
  aanuh: [["njaan", "I"], ["Rahul", "the identity"], ["aanuh", "am"]],
  aanoo: [["idhuh", "this"], ["chaaya", "tea"], ["aanoo?", "is it?"]],
  alla: [["idhuh", "this"], ["chaaya", "tea"], ["alla", "isn’t"]],
  evide: [["Kevin", "who you’re looking for"], ["evide", "where"], ["aanuh?", "is he?"]],
  unduh: [["ivide", "here"], ["vellam", "water"], ["unduh", "there is"]],
  availability: [["ivide", "here"], ["chaaya", "tea"], ["undoo?", "is there any?"]],
  veenam: [["enikku", "for me"], ["chaaya", "tea"], ["veenam", "wanted"]],
  veenoo: [["chaaya", "tea"], ["veenoo?", "want some?"]],
  veenda: [["chaaya", "tea"], ["veenda", "don’t want"]],
  present: [["njaan", "I"], ["vellam", "water"], ["kudikkunnu", "am drinking"]],
  habit: [["njaan", "I"], ["divasavum", "every day"], ["chaaya", "tea"], ["kudikkum", "drink"]],
  also: [["njaanum", "I too"], ["varum", "will come"]],
  past: [["Kevin", "who came"], ["vannu", "came"]],
  "past-question": [["Kevin", "who you’re asking about"], ["vannoo?", "did he come?"]],
  "past-negative": [["Kevin", "who you’re talking about"], ["vannilla", "didn’t come"]],
  future: [["njaan", "I"], ["naale", "tomorrow"], ["varum", "will come"]],
  aam: [["naale", "tomorrow"], ["kaanaam?", "shall we meet?"]],
  eppoo: [["eppoo", "when"], ["varum?", "will you come?"]],
  aamoo: [["vellam", "water"], ["taraamoo?", "can you give me some?"]],
  atte: [["chaaya", "tea"], ["taratte?", "shall I give you some?"]],
  pattum: [["enikku", "for me"], ["varaan", "to come"], ["pattum", "is possible"]],
  ishtam: [["enikku", "for me"], ["chaaya", "tea"], ["ishtam aanuh", "is something I like"]],
  pakshe: [["chaaya unduh", "there’s tea"], ["pakshe", "but"], ["kaappi illa", "there’s no coffee"]],
  engil: [["mazha illa", "there’s no rain"], ["engil", "if"], ["purattu kaanaam", "let’s meet outside"]]
};

const book = [
  {
    id: "at-the-gate", title: "At the gate", scene: "gate", alt: "Rahul and Kevin wave to Kirti across a gate.",
    intro: "Kevin is at the gate. Rahul asks about a bag, and Kirti calls down from the veranda.",
    dialogue: [
      ["Rahul", "idhuh ninde bag aanoo?", "Is this your bag?"],
      ["Kevin", "alla. adhuh cheechiyude bag aanuh.", "No. That’s my older sister’s bag."],
      ["Kirti", "adhe, ende bag aanuh.", "Yes, it’s my bag."],
      ["Rahul", "aa, idhuh chaavi aanoo?", "Oh, is this the key?"],
      ["Kirti", "adhe, adhuh chaavi aanuh.", "Yes, that’s the key."]
    ],
    words: [["idhuh / adhuh", "this / that"], ["chaavi", "key"], ["cheechi", "older sister"], ["adhe", "yes, that’s right"], ["ende / ninde", "my / your (familiar)"]],
    lessons: [
      lesson("aanuh", "Say what something is", "this / that + identity + aanuh",
        "Put the thing you’re talking about first, what it is next, and aanuh at the end. You can use the same pattern to identify yourself or somebody else.",
        "Use this pattern for identifying or classifying. The next chapter covers where someone is and whether something is available.",
        [["njaan Rahul aanuh.", "I’m Rahul."], ["idhuh chaaya aanuh.", "This is tea."], ["adhuh ende bag aanuh.", "That’s my bag."], ["idhuh chaavi aanuh.", "This is a key."]],
        [["Say “This is my bag.”", "idhuh ende bag aanuh."], ["Say “That’s tea.”", "adhuh chaaya aanuh."]]),
      lesson("aanoo", "Ask if you’ve got it right", "this / that + identity + aanoo?",
        "Put aanoo at the end of an identification question. Everything before it can stay in the same order. Use it to check a guess rather than ask for a missing word.",
        "adhe is a quick way to confirm an identification. You can follow it with the full sentence if the other person needs it.",
        [["idhuh chaaya aanoo?", "Is this tea?"], ["adhuh ninde bag aanoo?", "Is that your bag?"], ["idhuh chaavi aanoo?", "Is this the key?"], ["adhuh Kevin aanoo?", "Is that Kevin?"]],
        [["Ask “Is this my bag?”", "idhuh ende bag aanoo?"], ["Ask “Is that the key?”", "adhuh chaavi aanoo?"]]),
      lesson("alla", "Correct an identification", "this / that + proposed identity + alla",
        "Put alla where you would put aanuh when you want to rule out an identity. You can also answer with just alla and then offer the correction.",
        "After an identification question, adhe confirms the guess and alla rejects it. Chapter 2 introduces a different negative for availability.",
        [["idhuh chaaya alla.", "This isn’t tea."], ["adhuh ende bag alla.", "That isn’t my bag."], ["idhuh chaavi alla.", "This isn’t the key."], ["alla. adhuh Rahul aanuh.", "No. That’s Rahul."]],
        [["Say “This isn’t my bag.”", "idhuh ende bag alla."], ["Say “No. This is tea.”", "alla. idhuh chaaya aanuh."]])
    ]
  },
  {
    id: "where-is-everyone", title: "Where is everyone?", scene: "gate", alt: "Rahul, Kevin, and Kirti greet each other at the gate.",
    intro: "Kirti and Rahul are ready for tea. Kevin wants to know where Siddharth is and whether there’s water at the house.",
    dialogue: [
      ["Kevin", "Siddharth evide aanuh?", "Where’s Siddharth?"],
      ["Rahul", "Siddharth veettil unduh.", "Siddharth is at home."],
      ["Kevin", "ivide vellam undoo?", "Is there water here?"],
      ["Kirti", "unduh. chaaya illa.", "There is. There’s no tea."],
      ["Rahul", "chaaya kada evide aanuh?", "Where’s the tea shop?"]
    ],
    words: [["ivide / avide / evide", "here / there / where"], ["veettil", "at home"], ["vellam", "water"], ["kada", "shop"]],
    lessons: [
      lesson("evide", "Ask where something is", "person or thing + evide aanuh?",
        "Start with the person or thing you’re looking for and use evide aanuh to ask where it is. The same question works for a person, an object, or a place.",
        "When the topic is already clear, evide aanuh? can stand on its own. Learn veettil as one ready-to-use form for ‘at home.’",
        [["Kevin evide aanuh?", "Where’s Kevin?"], ["chaavi evide aanuh?", "Where’s the key?"], ["bus stop evide aanuh?", "Where’s the bus stop?"], ["chaaya kada evide aanuh?", "Where’s the tea shop?"]],
        [["Ask where Rahul is.", "Rahul evide aanuh?"], ["Ask where your bag is.", "ende bag evide aanuh?"]]),
      lesson("unduh", "Say what’s there", "place + thing + unduh",
        "Use unduh for presence or availability. Start with a place if it helps, then name what’s there. For a person, person + place + unduh is a useful way to say where they are.",
        "Curl your tongue back for nd in unduh. In endhaa, dh tells you to bring your tongue forward to the back of your upper front teeth. Ende uses a ridge d, like the one in English end.",
        [["ivide vellam unduh.", "There’s water here."], ["avide chaaya unduh.", "There’s tea there."], ["Kevin veettil unduh.", "Kevin is at home."], ["chaavi ivide unduh.", "The key is here."]],
        [["Say “There’s tea here.”", "ivide chaaya unduh."], ["Say “Rahul is at home.”", "Rahul veettil unduh."]]),
      lesson("availability", "Check what’s available", "thing + undoo? → unduh / illa",
        "Put undoo at the end to ask whether something is present or available. A short unduh means ‘there is’ and illa means ‘there isn’t.’",
        "Compare chaaya aanoo? (‘Is it tea?’) with chaaya undoo? (‘Is there tea?’). The first checks an identity. The second checks availability.",
        [["ivide chaaya undoo?", "Is there tea here?"], ["vellam undoo?", "Is there water?"], ["ivide chaaya illa.", "There’s no tea here."], ["chaavi avide illa.", "The key isn’t there."]],
        [["Ask whether there’s water here.", "ivide vellam undoo?"], ["Say “There’s no water.”", "vellam illa."]])
    ]
  },
  {
    id: "tea-for-four", title: "Tea for four", scene: "tea", alt: "Kirti and Siddharth point toward a cup of tea.",
    intro: "At the tea shop, everyone has an opinion. Kirti orders tea and Kevin goes for water.",
    dialogue: [
      ["Kirti", "enikku chaaya veenam.", "I’d like tea."],
      ["Rahul", "ninakku kaappi veenoo?", "Do you want coffee?"],
      ["Kevin", "kaappi veenda. vellam madhi.", "No coffee. Water is enough."],
      ["Kirti", "Siddharth, chaaya veenoo?", "Siddharth, do you want tea?"],
      ["Siddharth", "veenam. enikkum chaaya veenam.", "Yes, please. I’d like tea too."]
    ],
    words: [["enikku / ninakku", "to me / to you (familiar)"], ["kaappi", "coffee"], ["madhi", "enough"], ["enikkum", "for me too"]],
    lessons: [
      lesson("veenam", "Say what you want", "enikku + thing + veenam",
        "In this pattern, Malayalam uses enikku for the person who wants something. Say what you want after enikku and put veenam at the end.",
        "At a counter you can say chaaya veenam once the context is clear. The speaker is understood.",
        [["enikku chaaya veenam.", "I’d like tea."], ["enikku vellam veenam.", "I want some water."], ["enikku oru kaappi veenam.", "I’d like one coffee."], ["enikkum chaaya veenam.", "I’d like tea too."]],
        [["Ask for water using the full pattern.", "enikku vellam veenam."], ["Say “I’d like coffee too.”", "enikkum kaappi veenam."]]),
      lesson("veenoo", "Offer something with veenoo", "optional person + thing + veenoo?",
        "Veenoo turns the want pattern into a question. With a friend, ninakku makes it clear you’re asking them. If you are already looking at the person, you can leave it out.",
        "For a simple offer, the thing plus veenoo often does the whole job. Learn that short form first.",
        [["chaaya veenoo?", "Want some tea?"], ["vellam veenoo?", "Would you like water?"], ["ninakku kaappi veenoo?", "Do you want coffee?"], ["oru chaaya veenoo?", "Would you like a tea?"]],
        [["Offer someone water in two words.", "vellam veenoo?"], ["Ask a friend whether they want tea.", "ninakku chaaya veenoo?"]]),
      lesson("veenda", "Decline an offer", "thing + veenda",
        "Use veenda to say you don’t want or need something. A quick veenda works as an answer to an offer. Add madhi after what will do if you want to say what you prefer.",
        "Veenda answers a question about wanting. Illa answers a question about something being there.",
        [["chaaya veenda.", "No tea for me."], ["enikku kaappi veenda.", "I don’t want coffee."], ["veenda. vellam madhi.", "No, thanks. Water is enough."], ["kaappi veenda. chaaya madhi.", "No coffee. Tea will do."]],
        [["Decline coffee and say water will do.", "kaappi veenda. vellam madhi."], ["Say “I don’t want tea.”", "enikku chaaya veenda."]])
    ]
  },
  {
    id: "usual-routine", title: "The usual order", scene: "tea", alt: "Kirti and Siddharth order tea at the counter.",
    intro: "Kevin asks about the others’ routines. Kirti and Siddharth explain what they do in the evenings.",
    dialogue: [
      ["Kevin", "nee endhaa kudikkunnadhuh?", "What are you drinking?"],
      ["Kirti", "njaan kaappi kudikkunnu.", "I’m drinking coffee."],
      ["Siddharth", "njaan divasavum chaaya kudikkum.", "I drink tea every day."],
      ["Rahul", "njaan vaikeettu ivide varum.", "I come here in the evenings."],
      ["Kevin", "njaanum ivide varum.", "I’ll come here too."]
    ],
    words: [["nee", "you, familiar"], ["divasavum", "every day"], ["vaikeettu", "in the evening"], ["njaanum", "I too"]],
    lessons: [
      lesson("present", "Talk about what’s happening", "person + optional object + verb ending in unnu",
        "Use a form such as kudikkunnu for an action happening now. The verb goes at the end and its form stays the same when the subject changes.",
        "Learn a few whole forms first. Kudikkunnu is ‘drinking,’ kazhikkunnu is ‘eating,’ and varunnu is ‘coming.’",
        [["njaan vellam kudikkunnu.", "I’m drinking water."], ["Kirti kaappi kudikkunnu.", "Kirti is drinking coffee."], ["Kevin kazhikkunnu.", "Kevin is eating."], ["Siddharth varunnu.", "Siddharth is coming."]],
        [["Say “I’m drinking tea.”", "njaan chaaya kudikkunnu."], ["Say “Rahul is coming.”", "Rahul varunnu."]]),
      lesson("habit", "Talk about your usual routine", "person + routine cue + verb ending in um",
        "With a cue like divasavum, a form such as kudikkum describes a habit. The time cue tells the listener this is something that repeats.",
        "The same um forms also work for future plans. Divasavum points toward a habit. Naale, ‘tomorrow,’ points toward a future action.",
        [["njaan divasavum chaaya kudikkum.", "I drink tea every day."], ["Kevin raavile kaappi kudikkum.", "Kevin drinks coffee in the morning."], ["njaan vaikeettu ivide varum.", "I come here in the evening."], ["Kirti divasavum padikkum.", "Kirti studies every day."]],
        [["Say “I drink coffee every day.”", "njaan divasavum kaappi kudikkum."], ["Say “Kevin studies every day.”", "Kevin divasavum padikkum."]]),
      lesson("also", "Add yourself with um", "person or thing + attached um",
        "Attach um to the person or thing you want to include. Njaanum means ‘I too.’ Enikkum fits the want pattern from Chapter 3 and means ‘for me too.’",
        "Here um means ‘too.’ It attaches to the word it includes. In kudikkum, the ending is part of the verb.",
        [["njaanum varum.", "I’ll come too."], ["neeyum varumoo?", "Will you come too?"], ["enikkum vellam veenam.", "I want water too."], ["enikkum kaappi veenam.", "I want coffee too."]],
        [["Say “I’ll come too.”", "njaanum varum."], ["Say “I want tea too.”", "enikkum chaaya veenam."]])
    ]
  },
  {
    id: "the-rain-delay", title: "The rain delay", scene: "rain", alt: "Rahul and Siddharth share an umbrella as Samay arrives at the bus stop.",
    intro: "A downpour interrupts the group’s plans. Rahul and Siddharth squeeze under one umbrella just as their friend Samay arrives.",
    dialogue: [
      ["Rahul", "Kevin vannoo?", "Did Kevin come?"],
      ["Siddharth", "illa. Kevin vannilla.", "No. Kevin didn’t come."],
      ["Samay", "Kirti evide pooyi?", "Where did Kirti go?"],
      ["Siddharth", "Kirti veettil pooyi.", "Kirti went home."],
      ["Samay", "nee chaaya kudicchoo?", "Did you have tea?"],
      ["Siddharth", "kudicchu.", "I did."]
    ],
    words: [["mazha", "rain"], ["pooyi", "went"], ["vannu", "came"], ["kudicchu", "drank"]],
    lessons: [
      lesson("past", "Tell someone what happened", "person + optional place or object + past verb",
        "Start with a few past forms you can use immediately. Vannu means ‘came,’ pooyi means ‘went,’ and kudicchu means ‘drank.’ Put the action at the end.",
        "The shape of the past verb depends on the verb. Treat these forms as a small reusable set.",
        [["Kevin vannu.", "Kevin came."], ["Kirti veettil pooyi.", "Kirti went home."], ["njaan chaaya kudicchu.", "I drank tea."], ["Rahul ivide vannu.", "Rahul came here."]],
        [["Say “I came here.”", "njaan ivide vannu."], ["Say “Kevin drank water.”", "Kevin vellam kudicchu."]]),
      lesson("past-question", "Ask if it happened", "person + optional object + past question form",
        "Use vannoo, pooyoo, or kudicchoo to ask whether someone came, went, or drank something. Once you’ve established the person, the question can be just the verb.",
        "A short answer can echo the past verb. To vannoo?, a reply of vannu is enough to say ‘yes, I came’ when the person is obvious.",
        [["Kevin vannoo?", "Did Kevin come?"], ["Kirti pooyoo?", "Did Kirti leave?"], ["nee chaaya kudicchoo?", "Did you have tea?"], ["Siddharth ivide vannoo?", "Did Siddharth come here?"]],
        [["Ask whether Rahul came.", "Rahul vannoo?"], ["Ask a friend if they drank water.", "nee vellam kudicchoo?"]]),
      lesson("past-negative", "Say it didn’t happen", "person + optional object + negative past verb",
        "Vannilla, pooyilla, and kudicchilla say somebody didn’t come, go, or drink. Learn the whole form and use it in the same position as the positive past verb.",
        "Illa can also answer a yes/no question briefly. Giving the full verb afterward makes it clear which action didn’t happen.",
        [["Kevin vannilla.", "Kevin didn’t come."], ["Kirti pooyilla.", "Kirti didn’t go."], ["njaan chaaya kudicchilla.", "I didn’t drink tea."], ["Rahul ivide vannilla.", "Rahul didn’t come here."]],
        [["Say “I didn’t go.”", "njaan pooyilla."], ["Say “Kevin didn’t drink coffee.”", "Kevin kaappi kudicchilla."]])
    ]
  },
  {
    id: "tomorrows-plan", title: "Tomorrow’s plan", scene: "rain", alt: "Rahul, Siddharth, and Samay wait out the rain.",
    intro: "The rain lets up. Samay’s girlfriend Devika messages the group to make a plan for tomorrow.",
    dialogue: [
      ["Devika", "naale kaanaam?", "Shall we meet tomorrow?"],
      ["Rahul", "njaan vaikeettu varum.", "I’ll come in the evening."],
      ["Samay", "eppoo varum?", "When will you come?"],
      ["Rahul", "aaru manikku varum.", "I’ll come at six."],
      ["Siddharth", "shari, aaru manikku kaanaam.", "Okay, see you at six."]
    ],
    words: [["naale", "tomorrow"], ["eppoo", "when, conversational"], ["aaru manikku", "at six o’clock"], ["shari", "okay"]],
    lessons: [
      lesson("future", "Say what you’ll do", "person + time + verb ending in um",
        "Put a future time word before an um verb to talk about a plan or expectation. Varum is ‘will come’ and pookum is ‘will go.’",
        "A time word helps disambiguate a plan from a routine. You can leave the person out in a reply when it’s already understood.",
        [["njaan naale varum.", "I’ll come tomorrow."], ["Devika vaikeettu varum.", "Devika will come in the evening."], ["Kirti naale pookum.", "Kirti will go tomorrow."], ["aaru manikku varum.", "I’ll come at six."]],
        [["Say “I’ll come in the evening.”", "njaan vaikeettu varum."], ["Say “Kevin will come tomorrow.”", "Kevin naale varum."]]),
      lesson("aam", "Suggest doing something together", "optional time or place + verb ending in aam",
        "Use pookaam to suggest going and kaanaam to suggest meeting or seeing each other. With a questioning tone, the same form offers the plan for agreement.",
        "Kaanaam also works as a casual ‘see you.’ A time word can turn it into a more specific arrangement.",
        [["naale kaanaam?", "Shall we meet tomorrow?"], ["ippool pookaam?", "Shall we go now?"], ["chaaya kudikkaam.", "Let’s have tea."], ["vaikeettu kaanaam.", "See you in the evening."]],
        [["Suggest having coffee.", "kaappi kudikkaam."], ["Say “See you tomorrow.”", "naale kaanaam."]]),
      lesson("eppoo", "Ask when", "optional person + eppoo + verb",
        "Use eppoo where you’d expect the answer to the time question. Eppoo varum? leaves the subject open for context. Add a name when you need to specify who.",
        "Manikku follows the number in clock-time answers. Learn aaru manikku as a phrase for ‘at six.’",
        [["eppoo varum?", "When will you come?"], ["Samay eppoo varum?", "When will Samay come?"], ["eppoo pookaam?", "When shall we go?"], ["eppoo kaanaam?", "When shall we meet?"]],
        [["Ask when Rahul will come.", "Rahul eppoo varum?"], ["Answer “At six.”", "aaru manikku."]])
    ]
  },
  {
    id: "one-small-favor", title: "One small favor", scene: "porch", alt: "Samay and Devika talk over two cups of tea.",
    intro: "At the house, Kevin and Samay help Kirti set out tea. Devika asks whether Samay can still make it tomorrow.",
    dialogue: [
      ["Kirti", "Kevin, vellam kondu varaamoo?", "Kevin, can you bring water?"],
      ["Kevin", "shari.", "Okay."],
      ["Samay", "chaaya edukkatte?", "Shall I get the tea?"],
      ["Kirti", "edukkoo.", "Go ahead and get it."],
      ["Devika", "ninakku naale varaan pattumoo?", "Can you come tomorrow?"],
      ["Samay", "pattum.", "I can."]
    ],
    words: [["kondu varuka", "bring"], ["edukkuka", "take or get"], ["pattum", "can, possible"], ["pattilla", "can’t, isn’t possible"]],
    lessons: [
      lesson("aamoo", "Make a request", "thing + action ending in aamoo?",
        "With a request directed at the listener, a form such as taraamoo? asks whether they can do something for you. Put the thing you’re asking for before the verb.",
        "The wording and the tone work together. With family or friends, a short request can be perfectly natural.",
        [["vellam taraamoo?", "Can you give me some water?"], ["chaaya taraamoo?", "Could you give me tea?"], ["vellam kondu varaamoo?", "Can you bring water?"], ["onnu nokkaamoo?", "Could you take a look?"]],
        [["Ask someone to give you coffee.", "kaappi taraamoo?"], ["Ask someone to bring tea.", "chaaya kondu varaamoo?"]]),
      lesson("atte", "Offer to do something", "thing + action ending in atte?",
        "Use a form such as edukkatte? to ask whether you should do something. In these examples the person who will do it is the speaker.",
        "Taratte? makes a useful offer at the table. With chaaya in front, it becomes ‘Shall I give you some tea?’",
        [["chaaya taratte?", "Shall I give you tea?"], ["vellam edukkatte?", "Shall I get water?"], ["njaan varatte?", "Shall I come?"], ["njaan nokkatte?", "Shall I take a look?"]],
        [["Offer to get the tea.", "chaaya edukkatte?"], ["Offer someone some water.", "vellam taratte?"]]),
      lesson("pattum", "Say whether you can", "enikku / ninakku + action ending in aan + pattum",
        "Use pattum to say an action is possible, pattumoo to ask, and pattilla to say it isn’t. Put the action before it. For the person who can do it, enikku and ninakku work like they did with veenam.",
        "A short pattum or pattilla is enough in an answer. In a full sentence, varaan means ‘to come’ and pookaan means ‘to go.’",
        [["enikku varaan pattum.", "I can come."], ["ninakku pookaan pattumoo?", "Can you go?"], ["enikku naale varaan pattilla.", "I can’t come tomorrow."], ["ninakku vaikeettu varaan pattumoo?", "Can you come in the evening?"]],
        [["Say “I can go.”", "enikku pookaan pattum."], ["Ask whether a friend can come tomorrow.", "ninakku naale varaan pattumoo?"]])
    ]
  },
  {
    id: "see-you-tomorrow", title: "See you tomorrow", scene: "porch", alt: "Samay and Devika sit together at the table.",
    intro: "The evening winds down. Kirti checks the plan and Kevin explains why he might miss it.",
    dialogue: [
      ["Kirti", "Kevin, ninakku chaaya ishtam aanoo?", "Kevin, do you like tea?"],
      ["Kevin", "enikku chaaya ishtam aanuh. pakshe ippool veenda.", "I like tea. But I don’t want any now."],
      ["Rahul", "naale varumoo?", "Will you come tomorrow?"],
      ["Kevin", "jooli unduh. pakshe vaikeettu varaan pattum.", "I have work, but I can come in the evening."],
      ["Devika", "mazha illa engil, purattu kaanaam.", "If it isn’t raining, let’s meet outside."],
      ["Samay", "shari. naale kaanaam.", "Okay. See you tomorrow."]
    ],
    words: [["ishtam", "liking"], ["pakshe", "but"], ["jooli", "work"], ["purattu", "outside"], ["engil", "if"]],
    lessons: [
      lesson("ishtam", "Say what you like", "enikku + thing + ishtam aanuh",
        "Use enikku for yourself and put the thing you like before ishtam aanuh. To ask a friend whether they like it, use ninakku and end with ishtam aanoo.",
        "Ishtam talks about a preference. Veenam is useful when you’re asking to have something now.",
        [["enikku chaaya ishtam aanuh.", "I like tea."], ["enikku kaappi ishtam aanuh.", "I like coffee."], ["ninakku chaaya ishtam aanoo?", "Do you like tea?"], ["enikku mazha ishtam aanuh.", "I like rain."]],
        [["Say “I like coffee.”", "enikku kaappi ishtam aanuh."], ["Ask a friend whether they like rain.", "ninakku mazha ishtam aanoo?"]]),
      lesson("pakshe", "Add a ‘but’", "first thought + pakshe + second thought",
        "Pakshe introduces a contrasting thought. Say the first part, pause, and then use pakshe to add the exception or complication.",
        "You can start a reply with pakshe when the first idea is already established by the other person.",
        [["chaaya unduh. pakshe kaappi illa.", "There’s tea, but there’s no coffee."], ["enikku chaaya ishtam aanuh. pakshe ippool veenda.", "I like tea, but I don’t want any now."], ["njaan varum. pakshe vaikeettu varum.", "I’ll come, but I’ll come in the evening."], ["jooli unduh. pakshe varaan pattum.", "I have work, but I can come."]],
        [["Say “There’s water, but there’s no tea.”", "vellam unduh. pakshe chaaya illa."], ["Say “I like coffee, but I don’t want any now.”", "enikku kaappi ishtam aanuh. pakshe ippool veenda."]]),
      lesson("engil", "Make a plan with ‘if’", "condition + engil + plan",
        "Say the condition first, then use engil to turn it into an ‘if’ clause. Follow it with what you’ll do in that situation.",
        "A common form is undengil, ‘if there is.’ Learn it alongside illa engil, ‘if there isn’t.’ The condition comes first in both.",
        [["mazha illa engil, purattu kaanaam.", "If it isn’t raining, let’s meet outside."], ["jooli illa engil, njaan varum.", "If I don’t have work, I’ll come."], ["chaaya undengil, kudikkaam.", "If there’s tea, let’s have some."], ["samayam undengil, naale kaanaam.", "If there’s time, let’s meet tomorrow."]],
        [["Say “If there’s no rain, let’s go.”", "mazha illa engil, pookaam."], ["Say “If there’s time, I’ll come.”", "samayam undengil, njaan varum."]])
    ]
  }
];

Object.assign(breakdowns, {
  "more-present": [["njaan", "I"], ["jooli", "work"], ["cheyyunnu", "am doing"]],
  "more-past": [["njaan", "I"], ["jooli", "work"], ["cheydhu", "did"]],
  "more-plans": [["njaan", "I"], ["naale", "tomorrow"], ["cheyyum", "will do"]]
});

book.push({
  id: "more-things-to-do", title: "More things to do", scene: "porch",
  alt: "Samay and Devika talk at the table.",
  intro: "The next evening, Devika checks in with Samay. He has work to finish before the friends can go out.",
  dialogue: [
    ["Devika", "nee endhaa cheyyunnadhuh?", "What are you doing?"],
    ["Samay", "njaan jooli cheyyunnu.", "I’m working."],
    ["Devika", "Rahul evide pookunnu?", "Where is Rahul going?"],
    ["Samay", "Rahul kadayil pookunnu.", "Rahul is going to the shop."],
    ["Devika", "njaan jooli cheydhu. ippool pookaam?", "I did the work. Shall we go now?"],
    ["Samay", "shari. baakki naale cheyyaam.", "Okay. Let’s do the rest tomorrow."]
  ],
  words: [["kadayil", "to / at the shop"], ["baakki", "the rest"], ["innale", "yesterday"], ["cheyyuka", "do"], ["pookuka", "go"], ["padikkuka", "study / learn"], ["nokkuka", "look / check"]],
  lessons: [
    lesson("more-present", "What are you doing?", "person + optional object or place + present verb",
      "Cheyyunnu means ‘do’ or ‘am doing.’ Put the activity before it. Jooli cheyyunnu is ‘am working,’ literally ‘am doing work.’ Use the same order with pookunnu (‘am going’), padikkunnu (‘am studying’), and nokkunnu (‘am looking / checking’).",
      "For a general ‘What are you doing?’, learn endhaa cheyyunnadhuh? as a phrase. The ending adhuh helps make ‘what you are doing’ into the focus of the question. For a destination, kadayil is ‘to the shop’ with pookunnu.",
      [["njaan jooli cheyyunnu.", "I’m working."], ["Rahul kadayil pookunnu.", "Rahul is going to the shop."], ["Kirti Malayalam padikkunnu.", "Kirti is learning Malayalam."], ["njaan nokkunnu.", "I’m checking."]],
      [["Say “I’m going home.”", "njaan veettil pookunnu."], ["Ask a friend what they’re doing.", "nee endhaa cheyyunnadhuh?"]]),
    lesson("more-past", "What did you do?", "person + optional object or place + past verb",
      "For ‘do,’ the past form is cheydhu. The dh uses the same teeth position as idhuh. Compare cheyyunnu (‘am doing’) with cheydhu (‘did’). Go changes to pooyi, study to padicchu, and look or check to nokki.",
      "Use cheydhoo? to ask whether someone did it and cheydhilla to say they didn’t. You can leave the activity out when both people already know what it is.",
      [["njaan jooli cheydhu.", "I did the work."], ["nee jooli cheydhoo?", "Did you do the work?"], ["njaan cheydhilla.", "I didn’t do it."], ["Kevin innale kadayil pooyi.", "Kevin went to the shop yesterday."], ["Kirti innale padicchu.", "Kirti studied yesterday."], ["njaan nokki.", "I checked."]],
      [["Say “I didn’t do the work.”", "njaan jooli cheydhilla."], ["Say “I went home yesterday.”", "njaan innale veettil pooyi."]]),
    lesson("more-plans", "What will we do next?", "time + future form, or a suggestion ending in aam",
      "Cheyyum means ‘will do’ or ‘do regularly,’ depending on context. Use cheyyaam for ‘let’s do it.’ With go, the matching pair is pookum and pookaam. Padikkum is ‘will study,’ and nokkum is ‘will check.’",
      "To ask about a plan, use cheyyumoo? or pookumoo? To say you can do something, put cheyyaan before pattum. Cheyyaan is the ‘to do’ form, matching varaan (‘to come’) and pookaan (‘to go’) from Chapter 7.",
      [["njaan naale cheyyum.", "I’ll do it tomorrow."], ["naale kadayil pookumoo?", "Will you go to the shop tomorrow?"], ["baakki naale cheyyaam.", "Let’s do the rest tomorrow."], ["njaan vaikeettu padikkum.", "I’ll study in the evening."], ["njaan naale nokkum.", "I’ll check tomorrow."], ["enikku cheyyaan pattum.", "I can do it."], ["nee naale cheyyumoo?", "Will you do it tomorrow?"]],
      [["Suggest doing it now.", "ippool cheyyaam."], ["Say “I can’t do it.”", "enikku cheyyaan pattilla."]])
  ]
});

// Each everyday action verb uses the same set of forms. Special predicates
// have their own patterns below.
function actionForms(headword, { present, past, future, infinitive, suggestion, offer, command, need, conditional }) {
  const presentStem = present.slice(0, -1);
  return [
    [headword, "Dictionary form"],
    [present, "Present"],
    [presentStem + "oo", "Present question"],
    [presentStem + "illa", "Present negative"],
    [presentStem + "adhuh", "Present question phrase form"],
    [headword + "yaanuh", "Present progressive"],
    [past[0], "Past"], [past[1], "Past question"], [past[2], "Past negative"],
    [headword + "yaayirunnu", "Past progressive"],
    [future[0], "Future / habitual"], [future[0] + "oo", "Future question"], [future[1], "Future negative"],
    [infinitive, "Infinitive"],
    [suggestion, "Suggestion"], [suggestion + "oo", "Request"], [offer, "Offer / permission"],
    [command[0], "Polite instruction"], [command[1], "Negative instruction"],
    [need, "Need to / should"], [conditional, "If"],
    [infinitive + " pattum", "Can"], [infinitive + " pattumoo", "Can you?"], [infinitive + " pattilla", "Can’t"]
  ];
}

const comeForms = actionForms("varuka", {
  present: "varunnu", past: ["vannu", "vannoo", "vannilla"], future: ["varum", "varilla"],
  infinitive: "varaan", suggestion: "varaam", offer: "varatte", command: ["varoo", "vararudhuh"],
  need: "varanam", conditional: "vannaal"
});

const verbLexicon = [
  ["do", "cheyyuka", actionForms("cheyyuka", {
    present: "cheyyunnu", past: ["cheydhu","cheydhoo","cheydhilla"], future: ["cheyyum","cheyyilla"],
    infinitive: "cheyyaan", suggestion: "cheyyaam", offer: "cheyyatte", command: ["cheyyoo","cheyyarudhuh"],
    need: "cheyyanam", conditional: "cheydhaal"
  })],
  ["go", "pookuka", actionForms("pookuka", {
    present: "pookunnu", past: ["pooyi","pooyoo","pooyilla"], future: ["pookum","pookilla"],
    infinitive: "pookaan", suggestion: "pookaam", offer: "pookatte", command: ["pookoo","pookarudhuh"],
    need: "pookanam", conditional: "pooyaal"
  })],
  ["come", "varuka", comeForms],
  ["drink", "kudikkuka", actionForms("kudikkuka", {
    present: "kudikkunnu", past: ["kudicchu","kudicchoo","kudicchilla"], future: ["kudikkum","kudikkilla"],
    infinitive: "kudikkaan", suggestion: "kudikkaam", offer: "kudikkatte", command: ["kudikkoo","kudikkarudhuh"],
    need: "kudikkanam", conditional: "kudicchaal"
  })],
  ["eat", "kazhikkuka", actionForms("kazhikkuka", {
    present: "kazhikkunnu", past: ["kazhicchu","kazhicchoo","kazhicchilla"], future: ["kazhikkum","kazhikkilla"],
    infinitive: "kazhikkaan", suggestion: "kazhikkaam", offer: "kazhikkatte", command: ["kazhikkoo","kazhikkarudhuh"],
    need: "kazhikkanam", conditional: "kazhicchaal"
  })],
  ["study / learn", "padikkuka", actionForms("padikkuka", {
    present: "padikkunnu", past: ["padicchu","padicchoo","padicchilla"], future: ["padikkum","padikkilla"],
    infinitive: "padikkaan", suggestion: "padikkaam", offer: "padikkatte", command: ["padikkoo","padikkarudhuh"],
    need: "padikkanam", conditional: "padicchaal"
  })],
  ["look / check", "nokkuka", actionForms("nokkuka", {
    present: "nokkunnu", past: ["nokki","nokkiyoo","nokkiyilla"], future: ["nokkum","nokkilla"],
    infinitive: "nokkaan", suggestion: "nokkaam", offer: "nokkatte", command: ["nokkoo","nokkarudhuh"],
    need: "nokkanam", conditional: "nokkiyaal"
  })],
  ["give to the speaker", "taruka", actionForms("taruka", {
    present: "tarunnu", past: ["tannu","tannoo","tannilla"], future: ["tarum","tarilla"],
    infinitive: "taraan", suggestion: "taraam", offer: "taratte", command: ["taroo","tararudhuh"],
    need: "taranam", conditional: "tannaal"
  })],
  ["take / get", "edukkuka", actionForms("edukkuka", {
    present: "edukkunnu", past: ["edutthu","edutthoo","edutthilla"], future: ["edukkum","edukkilla"],
    infinitive: "edukkaan", suggestion: "edukkaam", offer: "edukkatte", command: ["edukkoo","edukkarudhuh"],
    need: "edukkanam", conditional: "edutthaal"
  })],
  ["bring", "kondu varuka", comeForms.map(([form, label]) => ["kondu " + form, label])],
  ["see / meet", "kaanuka", actionForms("kaanuka", {
    present: "kaanunnu", past: ["kandu","kandoo","kandilla"], future: ["kaanum","kaanilla"],
    infinitive: "kaanaan", suggestion: "kaanaam", offer: "kaanatte", command: ["kaanoo","kaanarudhuh"],
    need: "kaananam", conditional: "kandaal"
  })],
  ["be possible / can", "pattuka", [
    ["pattuka", "Dictionary form"], ["pattum", "Ability"], ["pattumoo", "Ability question"],
    ["pattilla", "Inability"], ["pattunnilla", "Present inability"],
    ["patti", "Was able to"], ["pattiyoo", "Were you able to?"], ["pattiyilla", "Was unable to"],
    ["pattumengil", "If possible"]
  ]],
  ["be / identify", "aanuh", [
    ["aanuh", "Identification"], ["aanoo", "Identification question"], ["alla", "Negative identification"],
    ["aayirunnu", "Past"], ["aayirunnoo", "Past question"], ["aayirunnilla", "Past negative"],
    ["aayirikkum", "Future / likely"], ["aayirikkumoo", "Future question"], ["aayirikkilla", "Future negative"],
    ["aanengil", "If it is"], ["alla engil", "If it isn’t"]
  ]],
  ["exist / be available", "unduh", [
    ["unduh", "Presence"], ["undoo", "Availability question"], ["illa", "Absence"],
    ["undaayirunnu", "Past"], ["undaayirunnoo", "Past question"], ["undaayirunnilla", "Past negative"],
    ["undaakum", "Future"], ["undaakumoo", "Future question"], ["undaakilla", "Future negative"],
    ["undengil", "If there is"], ["illa engil", "If there isn’t"]
  ]],
  ["want / need", "veenam", [
    ["veenam", "Want / need"], ["veenoo", "Offer / want question"], ["veenda", "Decline / don’t want"],
    ["veenamaayirunnu", "Wanted / needed"], ["veenamaayirunnoo", "Did you want / need?"],
    ["veendi varum", "Will need"], ["veenamengil", "If wanted / needed"]
  ]],
  ["like", "ishtam aanuh", [
    ["ishtam aanuh", "Preference"], ["ishtam aanoo", "Preference question"], ["ishtam illa", "Don’t like"],
    ["ishtam aayirunnu", "Liked"], ["ishtam aayirunnoo", "Did you like it?"], ["ishtam illaayirunnu", "Didn’t like"],
    ["ishtam aanengil", "If you like it"], ["ishtam illa engil", "If you don’t like it"]
  ]],
  ["be enough", "madhi", [
    ["madhi", "Enough / will do"], ["madhiyoo", "Is it enough?"], ["madhiyaayilla", "Wasn’t enough"],
    ["madhiyaayirunnu", "Was enough"], ["madhiyaakum", "Will be enough"],
    ["madhiyaavilla", "Won’t be enough"], ["madhi engil", "If it’s enough"]
  ]]
];
