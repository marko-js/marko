# Task: Recipe difficulty

Recipes should have a difficulty level.

## Requirements
- Every recipe has a difficulty: one of `easy`, `medium`, `hard`. The three existing seed recipes are all `medium`.
- The new-recipe form (`/recipes/new`) gains a `<select name="difficulty">` with those three options, defaulting to `medium`; the chosen value is saved with the new recipe.
- The recipe detail page shows the recipe's difficulty inside an element with `id="difficulty"` (its text contains the difficulty word).
- A form submitted without touching the select saves `medium`.

## Output
Return only the files you create or modify (complete contents), paths relative to the app root.
