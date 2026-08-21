---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/html/serializer.ts › writeObjectProps
---

# Name the state a throwing getter was serializing instead of letting the throw escape bare

`writeObjectProps` reads each own enumerable key as `val[key]`, so a getter on any value that reaches the browser is invoked during serialization. When it throws, nothing catches it: a `<let>` holding `{ get bad() { throw new Error("x") } }` fails the render with `Error: x`, a stack that starts in the author's getter and continues into `writeObjectProps`, and none of the context `throwUnserializable` builds — the same slot holding a plain class instance reports `Unable to serialize "state" in …/template.marko:1:6. Values referenced in the browser must be serializable.` So the one failure with a user-authored callee is the one that names neither the state variable nor the file, and the reader hunts for a caller that is the runtime. Wrap the property read and hand the thrown value to `throwUnserializable` as `cause`, which reuses the existing accessor walk. The non-throwing case wants a line at the site as well: the getter runs exactly once and the client receives a frozen data property, so a value that recomputes per read on the server never recomputes on the client.

Check: render a template whose `<let>` holds `input.obj`, read only from a handler, with `input.obj = { get bad() { throw new Error("x") } }`. Today the render throws `Error: x` out of `writeObjectProps` with no file, line or state name, while `input.obj = new (class {})()` throws `Unable to serialize "state" in …:1:6`; expect the getter throw to carry the same location and be reported as the cause.
