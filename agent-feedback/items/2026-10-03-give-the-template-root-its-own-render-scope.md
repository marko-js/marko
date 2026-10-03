---
type: bug
impact: low
effort: high
site: packages/compiler/src/babel-plugin/parser.js › parseMarko
---

# Give the template root its own render scope, apart from module-level statements

Root markup shares `Program.body`, and so Babel's `Program` scope, with `import`, `export` and `static` statements, and the traverse patch registers the implicit `input` param there too. So `static const x` beside a root `<const/x>` collides, reported as a duplicate declaration or, with the static second, as a readonly mutation, where a `<const/x>` in a nested body shadows it and the language tools, which emit static code at module level, allow it. Since Babel ties a scope to a node, move root markup into a scoped body node under `Program` (a `MarkoTagBody` taking `input`), which also retires the `Program` params special case in the Babel patches. Root tags then stop having the `Program` as parent (`isProgram()` checks across the translators and taglib hooks), and a `static` statement between tags can no longer keep its place, so this needs a compiler major or a compatibility path.

Check: `pnpm run compile -- -o html -d template.marko` on `<const/x=1/>`, `static const x = 2;`, `<div>${x}</div>` reports "x is readonly and cannot be mutated."; with the two lines swapped it reports `Duplicate declaration "x"`.
