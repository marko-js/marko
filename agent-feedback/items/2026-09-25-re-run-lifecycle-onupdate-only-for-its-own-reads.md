---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/core/lifecycle.ts › analyze
---

# Re-run `<lifecycle>` `onUpdate` only for what its attributes and `onUpdate` read

`analyze` merges the references of every attribute, hooks included, into one effect, and `_lifecycle` calls `onUpdate` each time that effect re-runs, so a binding read only inside a closure `onMount` creates (a `document` listener, a callback handed to a library) re-runs `onUpdate` whenever it changes. The docs promise the narrower rule: marko-js/website `docs/reference/core-tag.md` › `<lifecycle>` describes `onUpdate` as "Called every time the dependencies of the `onUpdate` function are invalidated", and `packages/runtime-tags/cheatsheet.md` annotates `onUpdate() { this.chart.setData(data) }` with "re-runs when `data` changes". Those closures already read `$scope` live, as handlers do, so the re-run gains nothing and fires real side effects: a terminal whose `onUpdate` reconnects a dropped socket re-runs it the moment the `dead` flag its `onMount` listener reads is set. Subscribe the lifecycle to the reads of its non-function attributes and of `onUpdate`'s body only; failing that, say in the docs and cheatsheet that a read anywhere in any hook, including closures `onMount` creates, re-runs `onUpdate`.

Check: `pnpm run compile -- -o dom -d` on `<let/other=0>`, `<button onClick() { other++ }/>`, `<lifecycle onMount() { document.addEventListener("keydown", () => console.log(other)) } onUpdate() { window.n = (window.n || 0) + 1 }/>` (one tag per line) emits `_lifecycle(...)` inside the `_script` that `_let("other/1", …)` runs; mounted (jsdom), three clicks leave `window.n === 3`, expected unset since nothing `onUpdate` reads changed.
