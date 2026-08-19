---
type: dx
impact: med
effort: high
site: patches/@babel__types@7.29.7.patch
---

# Migrate to Babel 8 and chai 6 as dedicated efforts

Two majors stay pinned because they are migrations, not refreshes. Babel is held at 7.29.7 behind four hand-authored patches against Babel 7's compiled `lib/` (`patches/@babel__{types,traverse,generator,helper-compilation-targets}@7.29.7.patch`; the types one is 78 KB of injected Marko AST node types) plus `packages/compiler` reaching Babel-7 internals through the `@marko/compiler/internal/babel` export — Babel 8 restructures those modules, so the patches stop applying and the codegen needs porting. chai is held at 4.5.0 because chai 5+ is ESM-only and 371 CommonJS `require("chai")` call sites remain, all under `packages/runtime-class/test/**`. Give each its own PR.

Check: with `ls patches` and `rg -c 'require\("chai"\)' packages`.
