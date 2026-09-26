---
type: dx
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/function.ts › analyze
---

# Name `super` and `this` when a function that uses them cannot be serialized

`analyze` leaves an object method that uses `super`, and an arrow that uses the `this`, `arguments`, `super` or `new.target` of the code around it, unregistered, because registering would move it away from them. When such a function must reach the browser, debug SSR reports only `Unable to serialize "<name>"`, and production drops the value silently, so nothing points at the keyword that kept it unregistered. Direction: give a compile error or diagnostic naming the keyword and its location when `finalizeFunctionRegistry` finds a register reason on an expression root holding such a function. An error from `analyze` would also break the browser-only render, where these functions work, so it must be html-only or debug-only.

Check: `pnpm test -- --grep "runtime-tags/translator error-serialize-super-method "` pins `__snapshots__/ssr.error.debug.txt` as `Unable to serialize "obj" in …/template.marko:3:8 (reading label).`, which does not mention `super`.
