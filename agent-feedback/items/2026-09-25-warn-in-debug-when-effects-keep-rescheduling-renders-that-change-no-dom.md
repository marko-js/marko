---
type: dx
impact: low
effort: med
site: packages/runtime-tags/src/dom/schedule.ts › schedule
---

# Warn in debug builds when effects keep re-scheduling renders that change no DOM

An assignment made by an effect (`<script>`, `<lifecycle>`) schedules a render for the next frame, which re-queues every effect that reads the value. That frame-deferred cycle is supported (the comment in `dom/signals.ts › _let` and marko-js/website `docs/reference/reactivity.md` › Scheduling Updates both name animation loops), so when two effects each write a value the other reads, one setting `mounted = true` and the other setting it back while `parked`, the value flips every frame forever with no error and no visible change. In one real app this ran about 60 flushes a second on a parked view and was found only by counting `MessagePort.postMessage` calls. Add a `MARKO_DEBUG`-only `console.warn` (no change to optimized output) when effects have re-scheduled the queue for many consecutive frames and none of those flushes wrote to the DOM, naming the `<let>`s assigned; an animation loop writes the DOM every frame, so it stays silent. At minimum, name the pattern in `packages/runtime-tags/cheatsheet.md`.

Check: mount (jsdom, `pretendToBeVisual`) a template of `<let/parked=true>`, `<let/mounted=false>`, `<script>window.a = (window.a || 0) + 1; if (!mounted) mounted = true;</script>`, `<script>if (parked && mounted) mounted = false;</script>`, `<div>static</div>` (one tag per line). `window.a` is about 124 after one second and 248 after two, a `MutationObserver` on `body` records no mutations, and nothing is logged.
