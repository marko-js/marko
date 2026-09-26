---
type: dx
impact: low
effort: low
site: packages/runtime-tags/src/html/serializer.ts › writeReadableStream
---

# Report a locked ReadableStream in debug instead of dropping it silently

`writeReadableStream` returns `false` for a locked stream without the `throwUnserializable` report that every other unserializable value gets in MARKO_DEBUG, so the property silently disappears from the resume payload and the client reads `undefined`. Direction: report it in debug before returning `false`, with a message that the stream was already read on the server.

Check: in a `node -r ~ts` script inside the repo, with a boundary whose `abort` logs its error, `new Serializer().stringifyScopes([[1, {}, { s }]], boundary)` for `s = new ReadableStream()` after `s.getReader()` logs nothing and writes no `s`, while `{ f: new (class Foo {})() }` logs "Unable to serialize (reading f)".
