---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/html/serializer.ts › writeError
---

# Write error and typed array constructor names from the matched prototype, not the instance

`writeError` and `writeTypedArray` emit `"new " + val.constructor.name`, reading `constructor` off the instance, so an own `constructor` from parsed data lands unquoted in the inline resume script. `Object.assign(new Error(body.message), JSON.parse(text))`, a common way to rebuild an API error, turns upstream JSON `{"constructor":{"name":"(alert(1),Error)"}}` into `new (alert(1),Error)("x")`, which runs in the page. The comments above both functions say only the value's owner or a deliberately corrupted value can replace `constructor`, but `writeUnknownObject` reads the constructor from the prototype precisely because parsed data can. Direction: pass the name `writeUnknownObject` matched into `writeError`/`writeTypedArray` (as `writeIntl` takes its name), drop the two comments, and add serializer tests that set an own `constructor` on each type.

Check: in a `node -r ~ts` script inside the repo, `new Serializer().stringifyScopes([[1, {}, { value: Object.assign(new Error("x"), JSON.parse('{"constructor":{"name":"(alert(1),Error)"}}')) }]], { signal: { aborted: false }, state: {}, abort() {} })` returns `_=>[1,{value:new (alert(1),Error)("x")}]`; with `new Uint8Array([1, 2])` in place of the error it returns `new (alert(1),Error)([1,2])`.
