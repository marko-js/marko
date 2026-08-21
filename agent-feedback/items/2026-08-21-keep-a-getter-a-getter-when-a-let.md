---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › replaceRegisteredFunctionNode
---

# Keep a getter a getter when a `<let>` object literal is serialized

`replaceRegisteredFunctionNode`'s `ObjectMethod` case rebuilds every accessor as `t.objectProperty(node.key, replacement, node.computed)`, dropping `node.kind`. So a getter inside a serialized `<let>` stops being an accessor on the server: `<let/state={ get computed() { return 42 } }/>` compiles to `{ computed: _resume(function () { return 42 }, …) }` and `${typeof state.computed}` renders `function`, not `number`. The same object in a `<const>` nothing in the browser reads renders `number`, so whether a getter stays a getter depends on who else touches the value. A getter/setter pair is worse: `{ _v: 1, get v() { return this._v * 10 }, set v(n) { this._v = n } }` emits two `v:` properties and the setter wins, so `${o.v}` renders the setter's source. Identical in debug and optimize output, with no diagnostic. `references.ts` already distinguishes the kinds ("Accessor bodies run when the property is observed"), so either preserve the accessor when rebuilding or refuse to register one and report it.

Check: `pnpm run compile -- -o html -d` on `<let/state={ get computed() { return 42 } }/><div>${typeof state.computed}</div>` emits `computed: _resume(function () { return 42; }, …)` and the render prints `function`; the same file with `<const>` prints `number`. Expect both to print `number`.
