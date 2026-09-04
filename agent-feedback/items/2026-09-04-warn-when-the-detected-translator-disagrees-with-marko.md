---
type: dx
impact: med
effort: low
site: packages/compiler/src/config.js › config (default export) (the translator key)
---

# Warn when the auto-detected translator disagrees with the installed `marko` runtime

The translator is chosen by scanning the nearest `package.json` for a dependency _name_ matching `/^(?:@marko\/|marko-)runtime-/`, and `marko` itself never matches that regex — so an app that depends on `marko@5` and also lists `@marko/runtime-tags` (the state a mid-migration project lands in) silently compiles every template with `@marko/runtime-tags/translator`, the one translator that rejects the Class API, rather than the installed `marko/translator`, which is the interop translator and compiles both APIs. Nothing reports the switch: the only symptom is `class {} component blocks are no longer supported` on every Class template, which names the syntax instead of the dependency that selected the compiler, so the cause is findable only by reading this IIFE. The scan already declines (returns `undefined`) when two `@marko/runtime-*` names disagree, but a `marko` dependency is invisible to that guard, and the decline itself reaches the user as a bare `@marko/compiler: translator must provide a translate visitor object` from `babel-plugin/index.js`. Direction: when the translator was auto-detected rather than configured, compare the resolved translator's `version` (already exposed as `getRuntimeVersion`) against the major of the resolved `marko` package and emit a one-line `console.error` naming the detected dependency and the `translator` option; the same site can give the ambiguous case a message instead of the Babel error.

Check: `mkdir -p tmp-t && printf '{"dependencies":{"marko":"^5","@marko/runtime-tags":"^6"}}' > tmp-t/package.json && (cd tmp-t && node -r ~ts -e 'import("@marko/compiler/config").then(c => console.log(c.default.translator))')` prints `@marko/runtime-tags/translator` with no diagnostic while the installed `marko` is 5.39.38; dropping the `@marko/runtime-tags` entry prints `marko/translator`.
