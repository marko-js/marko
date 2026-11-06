---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/bindings.ts › isReadBeyondInvoking
---

# Count a read in the expression that builds a handler as observing its value

An `invokeOnly` expression (a native event handler attribute, a spread onto an element) marks every read inside it as only invoked, including one in the expression that builds the handler rather than in the handler's body. In a child `<button onClick=wrap(input.get)>` where `wrap` calls `get` while building the handler, `input.get` is counted as only invoked, so the parent passes `get` once in setup and the child calls `wrap` once: the value `wrap` captured never updates. Count only reads inside a function the expression holds (deferred) as invoked; a read evaluated while building the value observes it.

Check: child `static function wrap(fn) { const v = fn(); return (e) => (e.target.textContent = String(v)); }` + `<button#run onClick=wrap(input.get)>run</button>`, parent `<let/n=0/><button#inc onClick() { n++ }/><child get() { return n }/>`; `pnpm run compile -- -o dom -d` shows the parent calling `$input_get(…, $get($scope))` only in setup and the child calling `wrap($scope.input_get)` in a one-time `_script`, so after `inc` the `run` handler still shows `0`.
