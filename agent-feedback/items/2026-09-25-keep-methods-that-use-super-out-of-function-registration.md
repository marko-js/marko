---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/signals.ts › replaceRegisteredFunctionNode
---

# Keep methods that use `super` out of function registration

`replaceRegisteredFunctionNode` turns a registered `ObjectMethod` into a property holding a plain function (`$scope => function () { … }` in DOM, `_resume(function () { … })` in HTML), which drops the method's home object. A body that uses `super` is then a SyntaxError in both outputs, so the template module fails to load. Direction: in `visitors/function.ts` analyze, skip registration for a method whose body references `super`, as get/set accessors already are, and give a compile error naming `super` if such a method must reach the browser.

Check: `pnpm run compile -- -o dom -d template.marko` (and `-o html`) on `static const base = { go() { return 1 } };` + `<let/x=1/>` + `<const/obj={ __proto__: base, go() { return super.go() + x } }/>` + `<button onClick() { x++; console.log(obj.go()) }>go</button>`; copying each output to a `.mjs` file and running `node --check` on it reports `SyntaxError: 'super' keyword unexpected here`.
