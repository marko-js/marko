---
type: dx
impact: med
effort: med
site: scripts/pkg-override.js
---

# Load the packed CommonJS translators in CI

Tests run from TS source as native ESM, and `pkg-override.js` only switches `exports` to `dist/` at publish, so nothing loads the CommonJS builds consumers get. Interop between those builds and their external dependencies goes untested: rolldown's CJS output wraps every external default import as `__toESM(require(id), 1)`, which sets `default` to the whole module, so a default import of an ESM-only package works from source but throws `magic_string.default is not a constructor` once published. A CI step that runs `pkg-override.js` in a scratch copy, packs `packages/{compiler,runtime-tags,runtime-class}`, installs the tarballs and compiles a template with each translator on the `engines.node` floor would catch it.

Check: in `packages/runtime-tags/src/translator/core/style.ts` change the `magic-string` import to `import MagicString, { type SourceMap } from "magic-string"`; `pnpm test -- --grep style` passes, while `dist/translator/index.js` calls `new magic_string.default(...)` on the namespace object.
