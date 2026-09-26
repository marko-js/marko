---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/visitors/function.ts › canIgnoreRegister
---

# Register functions a `<for>` loop passes to its body

`canIgnoreRegister` exempts every function in a `<for>` attribute, but a function inside `of=`/`in=` becomes a loop param. When the body uses that param in the browser, SSR serializes the function unregistered and throws "Unable to serialize" (debug) or drops it (optimize). Direction: exempt only `<for>` attributes whose functions never reach the body (such as `by`), and let `of`/`in` register like any other value.

Check: `pnpm run compile -- -o html -d template.marko` on `<for|fn| of=[() => console.log(1)]><button onClick=fn/></for>` (or `<for|k, fn| in={ a: () => console.log(1) }>`) writes `fn` into `_scope(` with no `_resume(` wrapper, while `<const/list=[() => console.log(1)]/>` with `of=list` wraps it in `_resume(`. A fixture of that template with steps `[{}, click]` fails debug ssr with `Unable to serialize "fn"`.
