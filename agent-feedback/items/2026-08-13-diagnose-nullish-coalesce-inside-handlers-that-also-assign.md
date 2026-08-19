---
type: dx
impact: med
effort: med
site: packages/runtime-tags › handler type extract
---

# Diagnose nullish-coalesce inside handlers that also assign `<let>` (false TS2588)

Inside a native-tag handler or `<const/fn=() => {…}>`, an expression like `pending ?? value || ""` (or optional-chain + `??`) makes every later assignment to a `<let>` report TS2588 "Cannot assign to 'x' because it is a constant", even though the binding is a `<let>`. Workarounds that typecheck: parenthesize `(pending ?? value) || ""`, or avoid `??` in that function (`pending !== null ? pending : value || ""`). Cheatsheet/golden-rules should call this out next to the existing `>=` / `>` attribute-close gotchas.

Check: compile a tag with `<let/x=0>` and `onClick() { const y = a ?? b; x = 1 }` — TS2588 on `x = 1`; replace with a ternary and the error disappears.
