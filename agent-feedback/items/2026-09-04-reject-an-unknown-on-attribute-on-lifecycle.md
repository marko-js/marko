---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/core/lifecycle.ts › analyze
---

# Reject an unknown `on*` attribute on `<lifecycle>`

`<lifecycle>`'s `analyze` checks only that the tag has at least one attribute and that none is a spread; it never compares attribute names against the three hooks `tags/lifecycle.d.marko` declares (`onMount`, `onUpdate`, `onDestroy`). `<lifecycle onCreate() {…}>` and `<lifecycle onMounted() {…}>` therefore compile clean, emit no lifecycle wiring, and never run — a typo with no build error and no runtime symptom beyond the handler silently not firing. The check has to stay narrow, because arbitrary non-hook attributes are load-bearing: they carry the state that `Input<T>` compares between renders. An `on`-prefixed attribute that is not one of the three is unambiguously a typo, so a compile error naming the three hooks is affordable; a `MARKO_DEBUG` diagnostic is the smaller alternative.

Check: `pnpm run compile -- -o html -d <file>` on `<lifecycle onCreate() { console.log("x") }/>` compiles without error and the generated module contains no `_lifecycle` call.
