# Task: Async user profile

Build a single page with Marko 6 (the tags API). The app is served by @marko/run's dev server; `marko` and `@marko/run` are already installed. Create the page at `src/routes/+page.marko`.

## Existing file (do not write or modify it)

```js
/* src/data.js */
export function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Ada Lovelace", role: "Engineer" }), 300);
  });
}
```

## Requirements
- The page calls `getUser()` from `../data.js` during rendering (server side) and renders the result: the user's name inside `<h2 id="user-name">` and the role inside `<p id="user-role">`.
- While the data is still loading, the page must show a loading indicator containing the text `Loading profile` (Marko streams the placeholder first, then the resolved content).
- A static `<h1>Profile</h1>` heading appears above, and it must not wait for the data.

## Output
Return every file you create (paths relative to the app root).
