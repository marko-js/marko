---
type: bug
impact: high
effort: high
site: packages/compiler/src/babel-utils/tags.js › getTemplateId
---

# Make known-template child register ids independent of request order

Under `optimizeKnownTemplates`, a known template's child register id is `registered.children.size` at the key's first request, memoized in the module-level `idCache` keyed by the identity of the `optimizeKnownTemplates` array. Html and dom translate request keys through `runtime-tags/src/translator/util/signals.ts › getResumeRegisterId` (and `translator/core/style.ts › dynamicStyleName`) in output-specific order, so the two outputs agree only when they compile in one process against one array object. The `optimizeKnownTemplates` doc in `compiler/src/config.js` asks only for "the same" list, and `@marko/vite`'s two-process build (`vite build --ssr` then `vite build`, each passing an equal `getKnownTemplates(root)` array) meets that doc but not the real requirement, so the client registers effects and closure subscribers under ids the server's resume data names differently and resume runs the wrong function or none. Derive the child suffix from the key itself (as the hashed path already does) or from a per-template key table built in analyze in a canonical order that both outputs read, and add an optimize test mode that compiles dom against a fresh copy of the array (`runtime-tags/src/__tests__/main.test.ts › getModeOpts` shares one array today).

Check: in a `node -r ~ts` script at the repo root, set `file` to the absolute path of `packages/runtime-tags/src/__tests__/fixtures/async-state/template.marko`, `known = [file]`, and compile with `compileFileSync(file, { translator: "@marko/runtime-tags/translator", optimize: true, optimizeKnownTemplates: known, cache, output })` (the output is CommonJS, so calls print as `(0, _dom._script)(…)`): html writes `_script)($scope0_id, "a3")` for the click handler and `_subscribe` with `"a2"`, and dom compiled next with the same `known` and `cache` registers `_script)("a3", …)` and `_closure_get` with `"a2"`, but dom compiled with a fresh `[file]` array and a fresh `Map` cache registers `_script)("a2", …)` and `_closure_get` with `"a1"`.
