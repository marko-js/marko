---
type: perf
impact: high
effort: med
site: packages/runtime-tags/src/html/serializer.ts › Generator
---

# Make the runtime analyzably pure so bundlers tree-shake it fully

Two module-top-level side effects stop bundlers from dropping unused runtime code: `patchIteratorNext` mutates `Generator.prototype`/`AsyncGenerator.prototype` at import, and the `KNOWN_FUNCTIONS`/`KNOWN_OBJECTS` tables read `globalThis` members eagerly — nothing in `src` carries a `/* @__PURE__ */` annotation today. A plain fixture page bundle measures 16.1 kB unminified — ~7.6 kB minified — against 2.7 kB reachable. Re-measured 2026-07-30 the dom half is already clean (a bare `import "src/dom.ts"` shakes to 9 min / 13 brotli) and the dominant blocker is a third cause: `html/dynamic-tag.ts` › `patchDynamicTag` is a top-level IIFE where its dom twin (`dom/control-flow.ts`) is a plain function, and that one call captures `_dynamic_tag` and transitively retains `html/attrs.ts`, `html/content.ts`, `common/helpers.ts` and ~1.7 kB of `html/writer.ts` — `import "src/html.ts"` is 7614 min / 2844 brotli today, 7349/2745 with only the serializer causes named here fixed, and 2022/742 with a lone `/* @__PURE__ */` on the otherwise unchanged IIFE (safe: the `_dynamic_tag =` assignment lives in the inner `patch => {…}`, which never runs at module init; if it is rewritten as a plain function keep `const originalDynamicTag = _dynamic_tag` at module scope, or a second `patchDynamicTag` call rewraps the pristine original). Scope that honestly — server bytes only, -4768 min / -1649 brotli on a realistic static-page SSR bundle, collapsing to -89 as soon as anything in the server graph renders `<${tag}>` or `<${input.content}/>`, i.e. any layout wrapper. Install the iterator patch from the `Serializer` constructor instead (`html/writer.ts`'s `State` builds one per render, before user code can consume a generator) and wrap the remaining hazardous initializers in `@__PURE__`-annotated calls.

Check: with a rolldown probe: a bare import of `src/html.ts` plus `src/dom.ts` should tree-shake to zero bytes. Expect fixture `sizes.json` churn mixing real wins with chunk accounting.
