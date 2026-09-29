---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/function.ts › canIgnoreRegister
---

# Serialize a function a `<for of>` or `<for in>` hands to its items

`canIgnoreRegister` exempts every function in a `<for>` attribute, but one in `of=` or `in=` becomes a loop param, so a body that uses it in the browser (say as a handler) throws `Unable to serialize` in debug builds and loses it in production. Dropping the exemption for `of` and `in` fixes it but also registers callbacks such as `of=data.map(() => ...)` whenever the collection serializes, growing real apps for an uncommon pattern; the exemption can stay for `by` (it only keys items, and the client evaluates its own copy) and for `to`, `from`, `step` and `until` (numbers). Direction: register only functions that can end up as an item value, not ones passed to a call.

Check: a fixture with template `<let/count=0/><for|handler| of=[() => count++]><button#of onClick=handler>of</button></for><span>${count}</span>` and a step that clicks `#of` fails to serialize the handler.
