---
type: dx
impact: med
effort: med
site: packages/runtime-tags/src/html/serializer.ts › throwUnserializable
---

# Keep a source position and a stack on an `Unable to serialize` error

`throwUnserializable` appends `:line:column` only when the failing binding has a `root.loc`, so any value spelled off `input` names the bare file and no position — `packages/runtime-tags/src/__tests__/fixtures/component-attrs-import-value` reports `…/counter.marko` while `unserializable-warning` reports `…/template.marko:2:10` for the same class of failure. The line right after builds the error and sets `err.stack = undefined`, discarding the only other locator, so under `@marko/run` dev the error page ships `{"message":…,"stack":"","frame":""}` and renders an empty `<pre>`: the browser overlay is one sentence with no file position, no frame and no stack, which is what turns a serialization failure into a bisection hunt. The translator already emits a per-var loc in the `writeScope` debug object and just leaves it off `input`-rooted references (`input.option` becomes `["input.option"]` with no second element), so the position of the read is available to attach. Either carry that loc through, or keep a trimmed stack so the dev server can build a frame; either satisfies the requirement, which is that the error reaches the overlay carrying at least one locator.

Check: `cat packages/runtime-tags/src/__tests__/fixtures/{unserializable-warning,component-attrs-import-value}/__snapshots__/ssr.error.debug.txt` — only the first carries `:2:10`; both should carry a position. Under `marko-run dev`, the same failure serves an error payload whose `stack` and `frame` are both `""`; expect a non-empty `frame` or a `stack` the dev server can build one from.
