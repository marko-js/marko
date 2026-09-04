---
type: bug
impact: high
effort: med
site: packages/runtime-class/src/runtime/html/AsyncStream.js › AsyncStream
---

# Stop aborting the process when a render error reaches the destination stream

The constructor makes the destination stream itself the event bus (`events = writer && writer.on ? writer : new EventEmitter()`), so a render failure surfaces as `emit("error")` on the caller's `ServerResponse` and nothing installs a default listener. That turns the pattern `docs/rendering.md` (`render(input, stream)`) and `docs/http.md` both demonstrate — `View.render({}, res)` inside `http.createServer`, no handler — into `Unhandled 'error' event` and a dead process, after the client already holds a `200` and a body cut off mid-render. `renderable.js › safeRender` defers the throw through `setImmediate`, so a `try`/`catch` around `render` never sees it; only `out.on("error")`, `res.on("error")` or `out.catch()` avoids the abort and no page in `packages/runtime-class/docs` names any of them, so every template bug reads as the dev server randomly dying. `_doFinish` already guards `state.events !== state.stream` to keep Marko's `finish` off the caller's stream — do the same for `error`, giving the stream target a default that ends the response and reports the failure, and state the required listener in the `render(input, stream)` docs.

Check: `node -r ~ts ./check.tmp.mjs` where the file is `http.createServer((q,res)=>{try{marko.load(process.cwd()+"/x.marko","<div>hi</div>\n$ { throw new Error('boom') }").render({},res)}catch(e){console.log("caught",e.message)}}).listen(0,...)` plus a `fetch` of it — the client logs `STATUS 200`, `caught` never prints, and node exits 1 with `Unhandled 'error' event ... Emitted 'error' event on ServerResponse instance at AsyncStream.error`; expect the render failure to be reportable without a listener the docs never name.
