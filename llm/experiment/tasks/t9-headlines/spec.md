# Task: News page with slow headlines

Build a news page with Marko 6 and @marko/run file-based routing. The app is served by @marko/run's dev server; `marko` and `@marko/run` are already installed. All routes live under `src/routes/`.

## Existing file (do not write or modify it)

```js
/* src/store.js */
const headlines = [
  { id: 1, title: "Local otter learns to juggle" },
  { id: 2, title: "Harbor bridge repainted overnight" },
  { id: 3, title: "Rare comet visible this weekend" },
];

export function loadHeadlines() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(headlines), 120);
  });
}
```

## Requirements
- Page route `/news` lists the headlines: one `<li class="headline">` per headline showing its title, inside `<ul id="headlines">`.
- The headlines are slow to load, and the response must not block on them: a GET of `/news` must start displaying immediately, showing the text `Loading headlines` until the data arrives, and the headline list must replace the loading text when it resolves. All of this must happen within the single streamed HTML response — no client-side fetching; the raw response text contains the loading text first and the headline markup after it.
- Load the data in the server route layer for `/news` (its request handler), not by calling `loadHeadlines()` from inside the page markup.

## Output
Return every file you create (paths relative to the app root).
