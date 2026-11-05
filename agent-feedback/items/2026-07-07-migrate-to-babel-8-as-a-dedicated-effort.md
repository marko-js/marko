---
type: dx
impact: med
effort: high
site: patches/@babel__types@7.29.11.patch
---

# Migrate to Babel 8 as a dedicated effort

Babel is held at 7.29.x because the move is a migration, not a refresh: four hand-authored patches target Babel 7's compiled `lib/` (`patches/@babel__{types,traverse,generator,helper-compilation-targets}@7.29.*.patch`; the types one is 78 KB of injected Marko AST node types), and `packages/compiler` reaches Babel 7 internals through the `@marko/compiler/internal/babel` export. Babel 8 restructures those modules, so the patches stop applying and the codegen needs porting. Babel 8 also ships only ESM and declares `engines.node` `^22.18.0 || >=24.11.0`, so the published packages' `>=22.12.0` floor rises with it. Give it its own PR.

Check: `ls patches`, and `npm view @babel/core@8 engines type`.
