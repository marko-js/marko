---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/dom/queue.ts › prepareEffects
---

# Restore the outer render state after a nested compat render

`prepareEffects` saves and restores `pendingRenders` and `pendingEffects`, but its `finally` always sets `rendering = 0` and increments `runId`. `compat.ts › render` calls it when a Class API component renders a Marko 6 child, which happens synchronously inside an outer Marko 6 run when a Tags parent re-renders a class child. For the rest of that outer pass every scope looks earlier-run and nothing looks like it is rendering: `_let` applies an initializer to an earlier-run scope (a `<let/x=y/>` after the class child follows `y` instead of keeping its own value), `_or` queues instead of counting, and `_el_read` stops throwing. Direction: when `prepareEffects` is entered while `rendering`, restore the previous `rendering` and leave `runId` unchanged, and add an interop fixture.

Check: a `fixtures-interop` fixture with `components/class-wrap.marko` = `class {}` `<div><tags-child value=input.value/></div>`, `tags/tags-child.marko` = `<let/n=0/>` `<span>${input.value}</span>`, `template.marko` = `<let/y=1/>` `<button onClick() { y++ }/>` `<class-wrap value=y/>` `<let/x=y/>` `<p>${x}</p>`, `equivalent: false`, two button clicks, run with `--grep "translator-interop <name> "`: `render-csr.debug.md` shows `<p>` going 1, 2, 3 (without `<class-wrap>` it stays 1), and the resume run throws `TypeError: Cannot read properties of undefined (reading 'data')` from `_text` because `x` was never expected to change on the client.
