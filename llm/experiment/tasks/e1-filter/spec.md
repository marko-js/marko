# Task: Live search on the recipe list

The app is a small recipe box. Add a live search to the home page.

## Requirements
- Above the recipe list on the home page (`/`), add a text input with `id="q"`.
- As the user types, only recipes whose title contains the query (case-insensitive) remain visible in the list; the others must not be visible on the page.
- An element with `id="match-count"` shows the text `N shown` where N is the number of currently visible recipes, updating live.
- An empty query shows all recipes (`3 shown` for the seed data).
- The full list must still render on the server as before (all seed recipes present in the initial HTML response).

## Output
Return only the files you create or modify (complete contents), paths relative to the app root.
