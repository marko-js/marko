---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/module-read.ts › resolveModuleRead
---

# Read a `static const` like a module read in `class` and `style`

A module read (an import binding and its members) in a `style` value is a static part: the template writes it once the module loads and the client updates only the value's items. A template's own `static const base = "display:block"` is just as fixed once the module loads, yet `resolveModuleRead` only resolves imports and `<style/name>` variables, so `style=[base, { color: c }]` with a `static const` rewrites the whole attribute through `_attr_style` on every change, and the client keeps `base` reachable. Direction: give `CONTEXT.md`'s _Module read_ a `static` declaration case (a `static const` whose init reads no render-time value), resolve it in `resolveModuleRead`, and check that `class` (which only takes style import reads) is unaffected.

Check: `pnpm run compile -- -o dom` on `<let/c=null/> static const local = "display:block"; <div style=[local, { color: c }]/> <button onClick() { c = "red" }/>` emits `_attr_style($scope.a, [local, …])`.
