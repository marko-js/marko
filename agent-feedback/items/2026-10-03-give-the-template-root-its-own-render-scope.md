---
type: bug
impact: med
effort: high
site: packages/compiler/src/babel-plugin/parser.js › parseMarko
---

# Give the template root its own render scope, apart from module-level statements

Root markup shares `Program.body`, and so Babel's `Program` scope, with `import`, `export` and `static` statements, and the traverse patch registers the implicit `input` param there too. Static code runs once at module level, yet it resolves root tag variables and `input`: `static function f() { return x }` beside a root `<const/x>` compiles to module-level code reading an undeclared `x`, and `static const x` beside a root `<const/x>` is a collision that a nested `<const/x>` would shadow, reported as a duplicate or, with the static second, as a readonly mutation. Since Babel ties a scope to a node, move root markup into a scoped body node under `Program` (a `MarkoTagBody` taking `input`), which also retires the `Program` params special case in the Babel patches. Root tags then stop having the `Program` as parent (`isProgram()` checks across the translators and taglib hooks), and a `static` statement between tags can no longer keep its place, so this needs a compiler major or a compatibility path.

Check: `pnpm run compile -- -o html -d template.marko` on `<const/x=1/>`, `static function f() { return x; }`, `<div>${f()}</div>` emits `function f() { return x; }` at module scope with no compile error; with `static const x = 2;` below `<const/x=1/>` instead, it reports "x is readonly and cannot be mutated."
