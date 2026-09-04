---
type: bug
impact: high
effort: low
site: packages/runtime-class/src/runtime/html/AsyncStream.js › then
---

# Reject `render(input)`'s promise when the stream already errored

`then` subscribes with `out.on("error", reject)` and `out.on("finish", resolve)`, but `on` replays an already-emitted `finish` to a late listener and never replays a past error, so an error raised during the synchronous render phase — before the caller can attach `then` — is dropped and the documented promise form of `render(input)` resolves with the partial HTML written so far. `error` produces that state by emitting `"error"` and then running `end()` in its `finally`, which fires `finish`; the reachable trigger is `packages/runtime-class/src/runtime/helpers/dynamic-tag.js`'s `out.error("Invalid dynamic tag value")`, so any dynamic tag handed a non-renderer object resolves as success with an element left unclosed. A server that awaits `render(input)` therefore answers 200 with a truncated body and logs nothing, while `renderToString` on the same template rejects because it subscribes before rendering. The same double signal reaches the other documented shapes: `render(input, callback)` fires the callback twice, once with the error and once with the truncated result, and `render(input, stream)` emits a stream error and still ends the stream with the truncated body. Record the error on `_state` so a later `on("error")`/`then` observes it and a `finish` emitted after an error cannot resolve.

Check: Compile `<div>p3 <${obj}/> tail</div>` (with `obj` a plain object) via `pnpm run compile -- -t class -o html -d`, then `await tpl.render({})` resolves to `"<div>p3 "` with nothing logged while `await tpl.renderToString({})` rejects with `"Invalid dynamic tag value"`.
