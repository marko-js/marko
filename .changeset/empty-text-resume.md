---
"@marko/runtime-tags": patch
---

Fix resume claiming the wrong DOM node for a placeholder that renders empty on the server (eg `<div/>${value}` where `value` starts empty and is assigned later). Placeholders now serialize a single `_text_resume`/`_html_resume` call which writes an `EmptyText` resume marker when the rendered text is empty, letting resume create the text node instead of guessing a neighbor.

Fix resume of an unescaped placeholder (`$!{value}`) whose markup parses to multiple top-level nodes: the server now brackets the markup with range markers so resume reconstructs the full range (including its last-child accessor), instead of claiming only the final node and orphaning the rest on the first client update.

This also removes the `<!>` separator comments previously written for empty positions and shrinks both the SSR output and the client resume runtime.
