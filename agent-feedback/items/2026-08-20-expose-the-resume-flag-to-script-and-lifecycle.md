---
type: dx
impact: med
effort: med
site: packages/runtime-tags/src/dom/resume.ts › isResuming
---

# Expose the resume flag to `<script>` and `<lifecycle>`

`runResumeEffects` sets `isResuming = 1` around the effects it replays and `dom/controllable.ts` reads it four times to decide whether a mount is a hydration, but nothing exports it, no `.d.ts` declares it and `packages/runtime-tags/cheatsheet.md` never mentions it, so a user `<script>` — which runs inside exactly that window — cannot tell a resume from a client-side mount. The cost shows up as entry animations: every server-rendered row plays its enter transition on first paint, and the workaround people reach for, a module-scope `client const` flag flipped in a `requestAnimationFrame`, is scoped to whichever chunk the module lands in rather than to the render, so it is not stable across builds. The deterministic alternative is to pass the decision down as an attribute from the parent, which cannot express re-entering the DOM and so loses the animation on every later insertion. Expose the flag where an effect can read it (on `$signal`, as a `<lifecycle>` hook argument, or as a compiler-provided `isHydrating`) and document it under `Client-side effects`.

Check: `grep -rn isResuming packages/runtime-tags/src packages/runtime-tags/*.d.ts packages/runtime-tags/cheatsheet.md` reports it only under `src/dom/`, so a `<script>` recording `window.__runs` cannot distinguish a resumed mount from a fresh client render; expect a userland-reachable signal plus a fixture asserting it is set on resume and clear on a client-only render.
