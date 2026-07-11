# Task: Notes drawer

Build a single page with Marko 6 (the tags API). The app is served by @marko/run's dev server; `marko` and `@marko/run` are already installed. Create the page at `src/routes/+page.marko`.

## Requirements
- A button with `id="toggle"` shows/hides a drawer element with `id="drawer"`. The drawer starts hidden.
- Inside the drawer: a `<textarea id="notes">` where the user can type a draft note.
- Hiding the drawer and showing it again must preserve whatever was typed in the textarea (the draft must survive the round trip).
- When hidden, the drawer's content must not be visible on the page.

## Output
Return every file you create (paths relative to the app root).
