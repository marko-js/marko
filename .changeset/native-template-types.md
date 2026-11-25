---
"@marko/compiler": minor
---

Types are stripped in one pass over the template rather than by Babel's TypeScript plugin, which is no longer bundled. Enums, namespaces and parameter properties compile natively. Enums now compile in `static`, `server`, `client` and `$` statements too, as namespaces did. Reads of an enum's constant members are inlined, a regular enum's as a `const enum`'s, and template content reads a `server` or `client` statement's enum as each output does; a regular enum keeps its object for other uses, and a `const enum` is removed once every member folds and every read is inlined, else is a plain object, as an exported one is. An exported namespace is initialized when the module loads rather than on its first render, and an enum or namespace a namespace exports adds to the one an earlier declaration of that namespace exported.

A statement's import of types alone is kept for its module's effects, as an import at the template's root already was (`verbatimModuleSyntax`). A local `export` of a type a statement declares is removed, a statement left empty by stripping is removed rather than printed as `static {}`, and comments on removed type declarations are dropped. `import … =` and `export =` are compile errors (`import type … =` is stripped), as is an enum or namespace a taglib migrator adds to a template whose source declares none.
