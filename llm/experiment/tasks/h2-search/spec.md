# Task: City search

Build a single page with Marko 6 (the tags API). The app is served by @marko/run's dev server; `marko` and `@marko/run` are already installed. Create the page at `src/routes/+page.marko`.

## Existing file (do not write or modify it)

```js
/* src/cities.js */
export const cities = [
  "Amsterdam", "Austin", "Barcelona", "Berlin", "Boston",
  "Lisbon", "London", "Melbourne", "Oslo", "Osaka",
];
```

## Requirements
- A search input with `id="q"`.
- A list `<ul id="results">` with one `<li>` per city whose name contains the search text, case-insensitively. With an empty search, all cities are listed.
- The list updates live as the user types (no submit button).
- An element with `id="count"` shows exactly `N matches` where N is the number of listed cities.

## Output
Return every file you create (paths relative to the app root).
