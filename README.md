# Malayalam, Every Day

An illustrated beginner textbook for spoken Malayalam, written in Roman letters. Eight chapters cover 24 grammar points through dialogues, examples, and practice.

[Read the public edition](https://rah-1.github.io/malayalam-everyday/)

## Run locally

Serve the `dist` directory from the repository root.

```sh
python -m http.server 8000 --directory dist
```

Open [localhost:8000](http://localhost:8000). The reader includes in-page lesson help. Live tutor replies require a separately configured `/api/tutor` backend.

## Deployment

GitHub Pages publishes the static reader in `dist` whenever changes land on `main`.
