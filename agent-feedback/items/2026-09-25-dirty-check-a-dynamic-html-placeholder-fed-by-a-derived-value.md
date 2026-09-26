---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/visitors/placeholder.ts › translateExit
---

# Dirty-check a `$!{}` fed by a derived value

`translateExit` adds the DOM `_html` statement with `isPure` set, so a derived binding (a `<const>`) whose Signal holds only that statement lowers to a bare function with no `_const` wrapper (`util/signals.ts › initValue` skips it when the signal has no side effect). `dom/dom.ts › _html` re-parses and replaces its whole range on every call, so each upstream change re-creates the markup even when the value is equal, which drops focus, caret, `<details>` open state, media playback and element identity inside it. `_text` and the attribute helpers tolerate a repeated write; `_html` does not. Direction: pass `isPure` false for the `_html` statement (keeping `_text` pure), or compare with the previous value inside `_html`, and add a fixture that asserts no mutation for an unchanged value.

Check: fixture `<let/n=0>` + `<const/y=(n > 100 ? "<i>big</i>" : "<b>small</b>")>` + `<div>$!{y}</div>` + `<button onClick() { n++ }>${n}</button>` with steps `[{}, click]`: `dom.bundle.debug.js` has `const $y = ($scope, y) => _html($scope, y, "#text/0")`, and the click's Change in `render.debug.md` logs `INSERT: div > b` and `REMOVE: div > b + b` although `y` is unchanged.
