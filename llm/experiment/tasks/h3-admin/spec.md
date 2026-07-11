# Task: Protected admin section

Build part of a site with Marko 6 and @marko/run file-based routing. The app is served by @marko/run's dev server; `marko` and `@marko/run` are already installed. All routes live under `src/routes/`.

## Requirements
- Page route `/admin/dashboard` renders `<h1>Dashboard</h1>` and the text `Secret metrics`.
- Every route under `/admin/` (now and in the future) must be protected by a single access check written once (not per-page): if the request URL does not include the query parameter `key=letmein`, respond with HTTP status 401 and the plain text `unauthorized` without rendering the page.
- Requests with `key=letmein` proceed to render the page normally.

## Output
Return every file you create (paths relative to the app root).
