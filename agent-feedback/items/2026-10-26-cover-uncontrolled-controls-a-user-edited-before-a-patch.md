---
type: dx
impact: med
effort: med
site: packages/runtime-tags/src/__tests__/utils/track-mutations.ts › normalizeTree
---

# Cover uncontrolled controls a user edited before a patch

No patch fixture edits an uncontrolled `<input value>`, `<input checked>`, `<textarea value>`, `<select value>` or `<details open>` and then patches its value, so nothing checks that a patch refreshes the default and keeps the edit. The patch path itself takes main's helpers: `html/patches/attrs.ts › patchControl` writes a `PatchControl` entry with or without a change handler, and `dom/patches/control.feat.ts › controlPatchers` runs `_attr_input_value`, `_attr_input_checked`, `_attr_select_value` or `_attr_details_or_dialog_open`, whose missing handler falls to the matching `*_default` in `dom/controllable.ts`. Comparing such a page with a fresh render meets three harness gaps:

- Under `compare_defaults`, the option branch of `normalizeTree` prints live `selected` where the input, checkbox and textarea branches print defaults.
- A fresh render can't show an existing details' `open`: `_attr_details_or_dialog_open_default` sets it only where `scope[AccessorProp.Gen] === runId`, so an existing details keeps what the user left.
- A details the step creates stays comparable.

Check: a patch fixture with `compare_defaults: true`, template `<select value=input.v><option value="a">A</option><option value="b">B</option></select>` and steps `{ v: "a" }, { v: "b" }` fails its fresh-render comparison, though option `b` has `defaultSelected`. Template `<details open=input.on>x</details>` with steps `{ on: false }, { on: true }` fails the same way.
