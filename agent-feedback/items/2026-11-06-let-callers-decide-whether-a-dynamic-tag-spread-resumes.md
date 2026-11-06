---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts › analyze
---

# Let callers decide whether a dynamic tag's spread or handlers make its template interactive

Dynamic tag analyze calls `addResumeWork` for any spread or event/change handler attribute, so a wrapper like `<${input.as} ...input.attrs/>` initializes every page that renders it, though `html/dynamic-tag.ts` › `_dynamic_tag` writes the `DYNAMIC_TAG_SCRIPT_REGISTER_ID` effect only when a native element receives a handler, and a handler written in a template registers there (`finalizeRegistrations` then marks that template interactive). The spread's reason is a param each call site guards, so per package AGENTS.md › Translator its callers should decide. The obstacle: the wrapper's module must still load wherever a handler reaches it, so that its `dynamic-tag-script` feature registers, and a handler arriving sideways (one child's tag variable passed to another by a parent with nothing of its own to resume) reaches it through no shipped template.

Check: a fixture whose `template.marko` is `<wrapper as="div" attrs={ class: "x" }/>`, with `tags/wrapper.marko` as `<${input.as} ...input.attrs/>`, writes a `sizes.json` with `template.marko.page.mjs` at 5504 min / 2385 brotli, though nothing in it can attach a handler.
