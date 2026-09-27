---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/html/serializer.ts › writeAggregateError
---

# Keep an error's own `errors` or `message` from parsed data from breaking the payload

`writeAggregateError` writes `val.errors` as the constructor's first argument whatever it holds, and `writeError`/`writeAggregateError` coerce `val.message + ""`. `Object.assign(new AggregateError([], "m"), JSON.parse(body))` with the common API shape `{"errors":{"email":"invalid"}}` writes `new AggregateError({email:"invalid"},"m")`, which throws "object is not iterable" in the browser and aborts the whole resume payload; `{"message":{"toString":1}}` onto any error makes `stringifyScopes` throw "Cannot convert object to primitive value" on the server. A constructed error only ever holds an array `errors` and a string `message`, so only an own property replaced by data reaches these paths. Direction: write `[]` unless `Array.isArray(val.errors)` and write `message` only when it is a string, reporting either case through `throwUnserializable` in MARKO_DEBUG.

Check: in a `node -r ~ts` script inside the repo, `new Serializer().stringifyScopes([[1, {}, { value: Object.assign(new AggregateError([], "m"), JSON.parse('{"errors":{}}')) }]], { signal: { aborted: false }, state: {}, abort() {} })` returns `_=>[1,{value:new AggregateError({},"m")}]`, and `new AggregateError({}, "m")` throws; with `Object.assign(new Error("x"), JSON.parse('{"message":{"toString":1}}'))` as the value, the call throws "Cannot convert object to primitive value".
