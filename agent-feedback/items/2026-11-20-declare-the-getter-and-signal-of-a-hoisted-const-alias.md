---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › buildSignalFn
---

# Declare the getter and signal of a hoisted `<const>` alias

A handler that calls a `<const>` declared later whose value is another binding holding a function (an alias) compiles to `$a_getter($scope)()`, but no `$a_getter` is declared in either build, so the click throws a `ReferenceError`. The alias's signal is called (`$f2` runs `$a($scope, …)`) but declared only in debug output, where its whole body is `_assert_hoist`; the optimized build drops it and the first render throws a `ReferenceError`. Declare a getter for a hoisted alias (or read it through its alias root), and forward to an alias signal only when it has work in the build being emitted.

Check: compile `<button onClick() { console.log(a()) }/><let/n=1/><const/f=(() => n)/><const/a=f/><div>${n}</div>` with `pnpm run compile -- -o dom` and with `-d`: `$a_getter` is undeclared in both, and `$a` only in the optimized output.
