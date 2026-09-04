---
type: dx
impact: med
effort: med
site: packages/compiler/src/babel-plugin/parser.js › onOpenTagEnd
---

# Diagnose a TS type argument that a tag-ending `>` split into a comparison

A single TypeScript type argument in an attribute value is split by the tag-ending `>` with no diagnostic on any channel: `<let/s=new Set<string>()>` compiles with exit 0 to `let s = new Set() < string;` plus a stray `()>` text node written into the HTML, so the tag variable holds a boolean and leftover source renders on the page. The two-type-argument spelling (`new Map<string, number>()`) does raise an error, so the fully silent case is exactly the common single-argument one (`new Set<T>()`, `new Array<T>()`, `fetchJson<User>(url)`), and when the type name is also a runtime value in scope (`static class Todo {}`) the comparison evaluates instead of throwing — just wrong state and stray markup. A type-only name (`import type`, or an unbound `string`) is erased, so that spelling at least fails loudly with a `ReferenceError`. Everything needed to detect it is in hand at `onOpenTagEnd`: the attribute value parsed as a `<` BinaryExpression whose left is a `New`/`CallExpression`, the `<` hugging its operands, and the source character just past the attribute value being `(`; re-parsing the raw attribute value plus `>` plus the balanced parens that follow yields a Call/NewExpression carrying `typeArguments`, which confirms intent before anything is thrown and keeps ordinary comparisons out. Raise a `CompileError` there naming the parenthesized fix (`<let/s=(new Set<string>())>`), mirroring the `withWrappedAttrValueHint` precedent in the same file, and pin it with an `error_compiler` fixture. `packages/runtime-tags/cheatsheet.md` already states this rule twice, in Golden rule 2 and in the DON'T table, so the gap is a signal at the moment of the mistake, not documentation.

Check: `pnpm run compile -- -o html -d /abs/gen.marko` on `<let/s=new Set<string>()>` followed by `<div>${s.size}</div>` exits 0 and emits `let s = new Set() < string;` and `_html("()><div>…")`; the same file with `-o dom -d` emits `$s($scope, new Set() < string)`. Replacing `string` with a runtime value in scope (`static class Todo {}` plus `<let/items=new Set<Todo>()>`) compiles to `let items = new Set() < Todo;`, which evaluates rather than throwing. Expect a `CompileError` naming the parenthesized form.
