---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/html/writer.ts › flushScript
---

# Walk a late in-order chunk that has no resume data

`flushScript` writes the walk call only for ready scripts, effects, reorders, or `walkOnNextFlush`, so an in-order chunk that arrives after the page resumed, with only branch markers and no scope data or effects, is never walked. Its branches are never adopted: an `<await>` whose content streams in that chunk never receives later client updates. Requesting a walk whenever a chunk after the first flush carries resume markers would fix it.

Check: the template from `2026-09-23-apply-an-await-update-to-content-streamed-in-order-after-resume.md` without the `<script>` in the second `<await>`: `render-ssr.md` ends on `<button>2</button><div>0</div>`, and `writes.html` shows no `M._.w()` after the late chunk.
