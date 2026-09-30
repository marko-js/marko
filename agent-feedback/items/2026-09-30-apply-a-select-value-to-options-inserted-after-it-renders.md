---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/controllable.ts › _attr_select_value_default
---

# Apply a select's value to options inserted after it renders

`_attr_select_value_default` marks `defaultSelected` only on the options present when it runs, so an `<option>` a later branch inserts (`<await>`, `@placeholder`, `@catch`) is never selected on the client, while the server writes `selected` on it. A client-rendered form shows, and resets to, a different option than the same template resumed. Keep the normalized value with the select and mark matching options as branches insert them, as `_attr_select_value_script` already watches its options.

Check: remove `skip_settled` from `fixtures/try/try-placeholder-select-value/test.ts` and run `pnpm test -- --grep "runtime-tags/translator try try-placeholder-select-value "`; `settled` fails with option `b` selected in the resumed page and `a` in the client render.
