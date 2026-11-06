---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/entry-builder.ts › builder.visit
---

# Link only the child templates a page can render

`builder.visit` walks `file.metadata.marko.analyzedTags`, which `@marko/compiler`'s `resolveMarkoFile` fills with every template analysis loaded, including one used only in content no output renders (an unreferenced `<define>` body, content a known child never reads). Such a child still becomes a root or arrives through one, so its effects register and the page imports `init`, though it never renders. The translator already records that content as `Section.dropped`; the entry graph should follow only the child templates rendered outside it.

Check: a fixture whose `template.marko` is `<define/Unused><focuser/></define><button>only this</button>`, with `tags/focuser.marko` as `<script>document.body.focus()</script><p>focus</p>`, writes a `sizes.json` with `template.marko.page.mjs` at 1532 min / 824 brotli, against 374 / 232 with the `<define>` removed.
