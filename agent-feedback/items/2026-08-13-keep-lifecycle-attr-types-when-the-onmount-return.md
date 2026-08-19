---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator › <lifecycle> / tags typecheck
---

# Keep lifecycle attr types when the onMount return object reads `this.<attr>`

Returning `{ wasActive: !!this.active, … }` from `onMount` while `active=…` is also a lifecycle attr collapses the whole tag's `ThisType` to `object`: every attr (`active`, `load`, …) and every `this.*` access then fails with TS2353/TS2339, even though the same `this.active` read is legal inside `start()` / `onUpdate`. Assigning after construction works: `const self = { wasActive: false, … }; self.wasActive = !!this.active; return self`.

Check: with a fixture that sets `active=true` on `<lifecycle>`, returns `{ wasActive: !!this.active }` from `onMount`, and runs `mtc` / the tags typecheck — expect green after the post-construction assign form and red on the inline form.
