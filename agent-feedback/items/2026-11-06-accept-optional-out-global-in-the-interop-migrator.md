---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/interop/out-global.ts
---

# Accept `out?.global` in the interop migrator

The interop migrator rewrites `out.global` and `out["global"]` to `$global` in a Tags template compiled alongside Marko 5, but only for a plain member expression: `out?.global` reaches the "Only `out.global` is supported for compatibility." compile error, though it reads the same value. Accept an optional member expression too (or say in the error that the optional form is unsupported).

Check: compile a Tags template containing `<div>${out?.global.x}</div>` through the interop translator (an interop fixture under `packages/runtime-tags/src/__tests__/fixtures-interop/`); it fails with "Only `out.global` is supported for compatibility." while `${out.global.x}` compiles.
