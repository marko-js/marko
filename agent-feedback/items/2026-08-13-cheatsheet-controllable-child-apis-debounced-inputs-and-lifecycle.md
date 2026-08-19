---
type: unclear
impact: med
effort: low
site: packages/runtime-tags/cheatsheet.md › Golden rules / Client-side effects
---

# Cheatsheet: controllable child APIs, debounced inputs, and lifecycle `this` init

Three patterns apps hit that the cheatsheet does not spell out: (1) **Custom controllable props** mirror natives — `value` + `valueChange` and parent `value:=x` (not ad-hoc `onChange`); show a tiny child `<let/value:=input.value>` example under rule 7. (2) **Debounced field that stays controllable** — hold uncommitted text in `pending`, display with `<const/draft=((pending ?? value) || "")>`, commit by assigning `value` and clearing `pending`; do not sync draft from value in a `<script>` (violates rule 4). (3) **`<lifecycle>` return object** — do not read `this.<attr>` inside the object literal returned from `onMount` (collapses attr types); set fields after the object is created.

Check: by adding those three short examples and confirming an agent following only the cheatsheet no longer reaches for effect-style draft sync or `onChange` naming.
