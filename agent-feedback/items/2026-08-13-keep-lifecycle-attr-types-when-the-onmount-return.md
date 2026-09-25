---
type: bug
impact: med
effort: med
site: packages/runtime-tags/tags/lifecycle.d.marko › Input
---

# Keep lifecycle attr types when the onMount return object reads `this.<attr>`

Returning `{ wasActive: !!this.active, … }` from `onMount` while `active=…` is also a lifecycle attr collapses the whole tag's `ThisType` to `object`: every attr (`active`, `load`, …) and every `this.*` access then fails with TS2353/TS2339, even though the same `this.active` read is legal inside `start()` / `onUpdate`. Assigning after construction works: `const self = { wasActive: false, … }; self.wasActive = !!this.active; return self`.

The cause is circular inference in `Input<T, R> = T & ThisType<T & R> & { onMount?: () => R | void }`: `R` is inferred from `onMount`'s return, whose initializer reads `this: T & R`, so TypeScript gives up and uses `object` for both. The culprit line reports the same TS2339 as every follow-on `this.` use (about 90 in one real template), so nothing points at it. The documented typed form, `<lifecycle<{ active: boolean; wasActive?: boolean }> … onMount() { this.wasActive = !!this.active }>`, checks clean, and a diagnostic could offer it, but the inline literal should not need it.

Check: with @marko/type-check 3.2.1 and marko 6.3.55 (`tags/lifecycle.d.marko` is unchanged on main), type-check `tags/viewer.marko` = `export interface Input { active: boolean }` plus `<lifecycle active=input.active onMount() { const self = { count: 0, wasActive: !!this.active }; return self; } onUpdate() { if (this.active !== this.wasActive) this.count++; this.wasActive = this.active; }/>`. `mtc -d condensed` reports TS2353 on `active` and six TS2339 `Property '…' does not exist on type 'object'`, the first at the `this.active` inside the literal; the post-construction assign form and the `<lifecycle<{ active: boolean; count?: number; wasActive?: boolean }>>` form with `this.count = 0; this.wasActive = !!this.active` in `onMount` report nothing. Expect all three to be green.
