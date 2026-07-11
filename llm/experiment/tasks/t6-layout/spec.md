# Task: Site with shared layout

Build a two-page site with Marko 6 and @marko/run file-based routing. The app is served by @marko/run's dev server; `marko` and `@marko/run` are already installed. All routes live under `src/routes/`.

## Requirements
- Two pages: `/` (heading `<h1>Home</h1>` and some welcome text) and `/about` (heading `<h1>About</h1>` and some text about the site).
- Both pages share a single layout component, written once, that wraps every page:
  - a `<header id="site-header">` containing a `<nav>` with links (`<a>`) to `/` and `/about`,
  - the page content rendered inside a `<main>` element,
  - a `<footer id="site-footer">` with the text `built with marko`.
- The layout markup must not be duplicated into the page files.

## Output
Return every file you create (paths relative to the app root).
