# Suspected Bugs

Out-of-scope defects noticed while working on something else. Format and rules: [README.md](README.md).

## `client` scriptlet bindings read from template content silently render `undefined` on the server

`packages/runtime-tags/src/translator/visitors/scriptlet.ts:24` | 2026-07-02 | impact:med | effort:low

The mirror image of the new debug-build `ReferenceError` for `server` bindings read from template content: a binding declared with a `client` statement is stripped from the HTML build (replaced with a bare uninitialized `var`), but a template expression (placeholder, attribute) reading it still SSRs `undefined` into the markup — a silent hydration/content mismatch rather than a crash. The `isInTemplateContent` helper in scriptlet.ts could be reused to mark those reads and fail loudly during debug server renders, but client-only reads inside `<script>`/effects and event handlers are legitimate and would need to be excluded. In the same area, template-content _assignments_ to `server`/`client` bindings (e.g. `count++` in a handler; babel tracks them as constantViolations, not referencePaths) are still silently lost on the other side and could get the same treatment.
