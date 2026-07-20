---
"@marko/runtime-tags": patch
---

Stop the compiler crashing with `RangeError: Maximum call stack size exceeded` on a self- or mutually-referential `static`/`export` function. `getStaticDeclRefs` recursed on every value reference of a static-scope declaration with no visited set, so `static function tick() { requestAnimationFrame(tick); }` (and the `export function` and mutual `ping`/`pong` variants) re-entered the same binding forever during analysis, aborting every output with an opaque error and no source location, even though calling the function (`tick()`) compiled fine. The walk now tracks the declarations it has visited, so idiomatic self-scheduling, retry-loop, and self-registering-listener patterns compile.
