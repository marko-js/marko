# Task: Extract the duplicated meta row

The "meta" row (the paragraph with the minutes span and the stars span) is written out twice: once in `src/tags/recipe-card.marko` and once in the recipe detail page.

## Requirements
- Create ONE reusable component under `src/tags/` that renders the meta row: `<p class="meta">` containing the `minutes` span (`N min`) and the `stars` span, exactly as today.
- Both `src/tags/recipe-card.marko` and `src/routes/recipes/$id/+page.marko` must render the meta row through the new component instead of their own copies (the duplicated markup must exist in only one place).
- Rendered pages must not change: the home page and detail pages show the same meta rows as before.
- Do not change `src/store.js`.

## Output
Return only the files you create or modify (complete contents), paths relative to the app root.
