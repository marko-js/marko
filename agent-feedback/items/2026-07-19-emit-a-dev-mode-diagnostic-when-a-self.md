---
type: dx
impact: low
effort: med
site: packages/runtime-tags/src/dom/signals.ts › _let
---

# Emit a dev-mode diagnostic when a self-referential effect re-renders past a threshold

A `<script>` effect that writes a `<let>` it transitively reads re-renders forever with no cycle or max-depth diagnostic. `<let/n=0/><div>${n}</div><script>{ n = n + 1 }</script>` compiles to a `_let("n/1", ...)` signal that invokes the `_script` effect, whose body calls the setter again: `_let`'s non-rendering branch fires `schedule()` + `queueRender` on every value change with no per-scope update counter, `_script` is a bare `queueEffect` with no dedupe, and `run()` in `dom/queue.ts` drains renders then effects with no depth tracking. Mounted in jsdom the effect runs ~124 times per second (the `queueMicrotask`->`requestAnimationFrame`->`MessageChannel` pacing in `dom/schedule.ts` yields ~2 passes per frame), `n` grows unbounded and the console stays silent; a terminating variant (`if (n < 3) n = n + 1`) settles at `n = 3`, showing each self-write is a full render+effect pass. Writing state from an effect is user error (derive with `<const>`), so the gap is the diagnostic React and Solid provide. Add a `MARKO_DEBUG`-only update-depth guard in `run()`/`queueRender` that throws after N self-perpetuating passes on the same scope+signal.

Check: TODO
