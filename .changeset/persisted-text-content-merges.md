---
"@marko/runtime-tags": patch
---

Text-only tag content (`<title>`, `<script>`, `<style>`) participates in
persisted updates: request-derived content captures its whole computed
text in update renders (the content replaces wholesale through
`_text_content`, so the capture is the concatenated literal under a
reserved `textContent` pseudo-attr key) and the compiled merge replays
it against the live element. Per-route document titles now follow
persisted navigations; head `<meta>`/`<link>` attr holes already rode
the plain attr capture/merge path.
