---
type: dx
impact: low
effort: low
site: packages/runtime-tags/src/__tests__/utils/bundle.ts › stripModuleCode
---

# Keep blank lines inside template literals in bundle snapshots

`stripModuleCode` collapses every `\n{2,}` in the bundled code to one newline, meant for the gaps left by removed imports and region comments, but it also rewrites newlines inside template literals. Whitespace-significant output therefore misreads in `dom.bundle*.js` and `html.bundle*.js`: a `<pre>` written as `<pre>` + two newlines + `kept` appears as `<pre>` + one newline + `kept`, while `writes.html` and the compiled output show two. Collapse only lines the preceding replacements emptied (for example by removing a removed statement's trailing newline with it), or state the collapse in a comment at the replacement so a reader checks `pnpm run compile` before trusting a snapshot's whitespace.

Check: in `fixtures/pre-leading-newline`, `__snapshots__/html.bundle.debug.js` shows `</pre><pre>` + one newline + `kept</pre>`, while `pnpm run compile -- -o html -d` on the fixture's `template.marko` emits two newlines between `<pre>` and `kept`.
