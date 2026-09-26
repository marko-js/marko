---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/util/structure.ts › writeStructureExports
---

# Declare a `<define>` body's walks after the template exports it reads

When a `<define>` body renders the template that holds it (`tags/rec.marko` rendering `<rec/>` inside its own `<define>`), the body's section meta reads this program's own `$walks`/`$template` through `resolveRef`, but `writeStructureExports` puts every `getMetaDecls` declarator before those two exports. The module then reads `$walks` before it is initialized and throws when it loads. Order the meta declarators that read the program's own exports after them (or emit the exports inside the dependency-ordered list). Once fixed, drop `skip_csr`/`skip_ssr` from the `define-tag-body-renders-own-template` fixture so it renders.

Check: remove `skip_csr` and `skip_ssr` from `packages/runtime-tags/src/__tests__/fixtures/define-tag-body-renders-own-template/test.ts` and run `pnpm test -- --grep "runtime-tags/translator define-tag-body-renders-own-template "`: debug ssr and csr fail with "Cannot access '$walks' before initialization".
