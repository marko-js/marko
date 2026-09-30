---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/controllable.ts › _attr_select_value_script
---

# Keep a controlled select's value when its options render after the select

When a controlled `<select value=v valueChange=…>` gets its options from a later render (inside `<await>` here), the client's change observer takes the browser's automatic pick of the first option for a user change and calls `valueChange` with it, overwriting `v` although an option matching `v` now exists. The resumed page keeps `v`, so the same template ends on different selections depending on whether it rendered on the client or resumed. Re-apply the controlled value to the new options first and report only if it still does not take. `controllable-select-late-options` pins the client's current `a:1`, so its snapshots change with the fix.

Check: remove `skip_settled` from `fixtures/controllable/controllable-select-late-options/test.ts` and run `pnpm test -- --grep "runtime-tags/translator controllable controllable-select-late-options "`; `settled` fails with the resumed page at `b:0` and the client render at `a:1`.
