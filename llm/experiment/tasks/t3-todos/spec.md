# Task: Todo list

Build a single page with Marko 6 (the tags API). The app is served by @marko/run's dev server; `marko` and `@marko/run` are already installed. Create the page at `src/routes/+page.marko`.

## Requirements
- A text input with `id="new-todo"` and a button with `id="add"`.
- Clicking the add button appends a todo with the input's current text to the list and clears the input. Empty/whitespace-only text must not be added.
- Todos render inside an element with `id="list"`, one `<li>` per todo. Each `<li>` contains a checkbox (`<input type="checkbox">`) and the todo text. Checking the checkbox marks that todo as done.
- An element with `id="remaining"` shows exactly `N left` where N is the number of todos that are not done.
- When there are no todos at all, an element with `id="empty"` containing the text `No todos yet` is shown instead of the list; it must not be present once at least one todo exists.

## Output
Return every file you create (paths relative to the app root).
