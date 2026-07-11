# Task: Guestbook with form POST

Build a guestbook with Marko 6 and @marko/run file-based routing. The app is served by @marko/run's dev server; `marko` and `@marko/run` are already installed. All routes live under `src/routes/`.

## Existing file (do not write or modify it)

```js
/* src/store.js */
export const entries = [];

export function addEntry(message) {
  entries.push({ id: entries.length + 1, message });
}
```

## Requirements
- Page route `/guestbook`:
  - renders every entry from the store, one `<li class="entry">` per entry showing its message, inside `<ul id="entries">`,
  - when there are no entries, shows the text `Be the first to sign!`,
  - contains a `<form method="post">` (posting to `/guestbook`) with a text input named `message` and a submit button. This must work without any client-side JavaScript.
- A route handler for `/guestbook` handles the form POST: it reads the submitted form data, adds the message to the store via `addEntry`, and responds with an HTTP redirect (3xx status + `Location` header) back to `/guestbook` so a refresh does not resubmit.
- POSTs with an empty/whitespace-only message must not add an entry (still redirect back).

## Output
Return every file you create (paths relative to the app root).
