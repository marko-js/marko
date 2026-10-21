---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/util/simplify-fn.ts › simplifyFunction
---

# Keep an object method that reads `super` out of function registration

A registered object method is hoisted out of its object as a plain function (`simplifyFunction`, with `replaceMethodNode` leaving a reference behind). A method that reads `super` then compiles to `function $o() { return super.hi() + "!"; }`, which is a syntax error: `super` only exists inside a method. Either leave such a method in place, unregistered (resume then reports it as unserializable), or give a compile error at the method that names `super` as the reason.

Check: compile `<const/base={ hi() { return "hi"; } }/>`, `<const/o={ __proto__: base, hi() { return super.hi() + "!"; } }/>`, `<button onClick=o.hi/>` with `pnpm run compile -- -o dom -d <file>`; the output has `super` inside a `function` declaration.
