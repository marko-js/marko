---
type: bug
impact: med
effort: low
site: packages/runtime-class/src/runtime/helpers/tags-compat/runtime-html.js › flushScripts
---

# Ship the walker runtime with the compat flush of class init code

When class init code produces scripts, `flushScripts` sets `walkOnNextFlush` and flushes a Tags chunk, which writes `M.<renderId>.w()`. It adds the walker runtime only if `state.needsMainRuntime` is already set. On a Class page whose Tags child has not flushed anything yet, a class `<await>` that finishes first flushes its component init code with a bare `M.s.w()`, and the browser throws `ReferenceError: M is not defined`. Direction: have the walk that class init code requests set `needsMainRuntime` too, or skip the walk when no Tags state has been written.

Check: a `// use class` page with `<await(resolveAfter("class", 1))><@then|value|><class-child value=value/></@then></await>`, then `<tags-child/>` (a `// use tags` child with `<await|value|=resolveAfter("later", 2)><div>${value}</div></await>`), then `<init-components/>`, where `class-child` is `class {}` plus one element. In a `fixtures-interop` fixture with `skip_csr: true, steps: [{}, wait]`, the SSR test fails with `ReferenceError: M is not defined`.
