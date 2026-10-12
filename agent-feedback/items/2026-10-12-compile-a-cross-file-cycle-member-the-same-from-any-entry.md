---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/sections.ts › startSection
---

# Compile a cross-file cycle member the same from any entry

A template's section is created only after reading the tags its content starts and ends with, which loads (and analyzes) them, so a cycle can close back onto a template that has no section yet; `analyzeTagNameType` then renders that tag dynamically. Which tag closes the cycle depends on which template the compile entered through, so a member's output depends on compile order: server and client can disagree when their outputs come from different orders (an HMR edit recompiles one member alone after a cache clear, while the page recompiles from its entry), and no shared or persistent cache can hold one answer. Create the section before computing its content info, and compute that info on demand when a cycle reads it during that computation (before any of the template's tags are analyzed, so the result matches computing it at creation).

Check: compile `packages/runtime-tags/src/__tests__/fixtures/tags-dir-cycle/tags/cyc-b/index.marko` to `dom` with `compileFileSync` and a fresh `cache: new Map()`, then compile that fixture's `template.marko` and `cyc-b` again on one shared cache: the first composes `<cyc-a>` (importing `$template`, `$walks` and `$input_depth`), the second renders it through `_dynamic_tag` with a default import.
