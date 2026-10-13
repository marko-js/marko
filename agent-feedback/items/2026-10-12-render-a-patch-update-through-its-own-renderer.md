---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/program/html.ts › translate.exit
---

# Render a patch update through its own renderer

A patch template has one server renderer for both a page and an update, so an update still builds the markup (`_html`, `_attr*`, `_escape*`, `_el_resume`, …) and the resume scope writes (`_scope`, `_existing_scope`, `_scope_with_id`) that a `PatchUpdateState` discards, guarded only at run time where guarded at all. Partially evaluating the translated renderer at `translate.exit` into a page renderer (`_page_render()` folded on, starting with `if (!_page_render()) return $update(input)`) and an update renderer (markup helpers reduced to their arguments' effects, scope writes dropped, `_page_render`/`_write_guard`/`_write_if` folded off) keeps every caller unchanged and every patch byte-identical. A prototype measured about −20% CPU and −15% allocation per warm update on bench pages, for +27% minified (+7% brotli) server module size. Not worth it yet: an update's time goes mostly to GC (~44%) and the patch serializer (~25%), so revisit once those shrink.

Check: `pnpm run compile -- -o html --patches` on the `patch-app-chain` fixture: `layout.marko`'s one renderer, which an update runs too, calls `_html` with `_text_resume` and `_el_resume` unconditionally, and `template.marko`'s branch bodies call `_scope(…)` with `_existing_scope`, all output an update throws away.
