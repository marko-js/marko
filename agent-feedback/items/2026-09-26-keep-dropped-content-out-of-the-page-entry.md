---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/entry-builder.ts › builder.visit
---

# Keep content neither output renders out of the page entry

The page entry decides what to ship from facts gathered during analyze, before a known child's unread attribute tags are dropped: an event handler, `<script>` or `<lifecycle>` inside dropped content still sets `isInteractive`, and a custom tag rendered only there still lands in `file.metadata.marko.analyzedTags`, which `builder.visit` walks to pick root templates. A server-only page therefore ships the DOM runtime for a handler that never renders, and a child template rendered only in dropped content becomes a bundled root. Direction: skip the `isInteractive` writes (`visitors/function.ts`, `core/script.ts`, `core/lifecycle.ts`, `visitors/tag/native-tag.ts`) when `isSectionDropped` holds for the current section, and keep tags analyzed inside dropped content out of the entry walk.

Check: with `tags/static-child.marko` `<span>static</span>`, a fixture whose template is `<static-child><@junk><button onClick() { console.log("hi") }>hi</button></@junk></static-child>` records a 1433 byte `template.marko.page.mjs` in `sizes.json`, against 373 when the button has no handler.
