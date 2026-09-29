---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/function.ts › canIgnoreRegister
---

# Serialize a function a `<for of>` or `<for in>` hands to its items

`canIgnoreRegister` exempts every function in a `<for>` attribute, but one in `of=` or `in=` becomes a loop param, so a body that uses it in the browser (say as a handler) throws `Unable to serialize` in debug builds and loses it in production. Deferred: registering `of`/`in` functions also registers callbacks such as `of=data.map(() => ...)` whenever the collection serializes, growing real apps for an uncommon pattern. Branch `dpiercey-ws-marko-invariants-jcdpv7-fnregistration` has the fix, which keeps the exemption for `by`, `to`, `from`, `step` and `until`; land it only with a way to tell an item value from a callback.

Check: `pnpm test -- --grep "runtime-tags/translator for-function-params-handler "` on that branch's fixture fails on main.
