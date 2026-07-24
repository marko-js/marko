---
"@marko/compiler": patch
---

Stop publishing `internal/babel` as `"type": "commonjs"`. The directory ships only the ESM `index.ts` that `exports["./internal/babel"].types` points at, so the CommonJS marker made TypeScript reject it under `verbatimModuleSyntax` with `TS1295: ECMAScript imports and exports cannot be written in a CommonJS file`.
