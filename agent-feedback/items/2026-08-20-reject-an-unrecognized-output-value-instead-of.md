---
type: bug
impact: high
effort: low
site: packages/compiler/src/index.js › loadMarkoConfig
---

# Reject an unrecognized `output` value instead of translating to DOM

`output` is a closed set (`html`, `dom`, `source`, `migrate`, `hydrate`) but nothing validates it: `loadMarkoConfig` merges the user config into the defaults untouched, and the tags translator asks `isOutputHTML()` (`output === "html"`), so anything that is not the exact string `"html"` falls through to the DOM path. `compileSync(src, f, { output: "HTML" })` — like `"Html"` or `"bogus"` — emits `import … from "@marko/runtime-tags/debug/dom"` with no warning, which means a build-config typo ships the client runtime where the server one was requested and produces a plausible-looking build nothing downstream can tell from intent. `"hydrate"`, the one wrong-but-real value that does fail, reports it as a Babel message about `resolveVirtualDependency` rather than saying the mode is gone. Validate `output` in `loadMarkoConfig` and throw naming the accepted values.

Check: `compileSync("<div>hi</div>", f, { output: "HTML", translator: "@marko/runtime-tags/translator" })` returns code importing `@marko/runtime-tags/debug/dom`; expect a config error naming the accepted values.
