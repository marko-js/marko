---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/sections.ts › getNodeContentType
---

# Treat `<!doctype>` as no content when computing a section's content type

`getNodeContentType` has no case for `MarkoDocumentType`, so it falls through to `ContentType.Dynamic`, while `visitors/document-type.ts` writes nothing for DOM output. A page section that starts with a doctype therefore gets a leading `<!>` in its DOM template and an extra Enter/Exit walk step. Direction: return `null` for `MarkoDocumentType` alongside `MarkoComment`/`MarkoScriptlet`, and confirm the placeholder sibling-text analysis (`visitors/placeholder.ts` › `analyzeSiblingText`) still agrees with what the HTML writer emits next to a doctype.

Check: `packages/runtime-tags/src/__tests__/fixtures/page-doctype/__snapshots__/dom.bundle.debug.js` has `$template = "<!><html><body>…"` and `$walks = "bE D n"`; the leading `<!>` and `b` come from the doctype.
