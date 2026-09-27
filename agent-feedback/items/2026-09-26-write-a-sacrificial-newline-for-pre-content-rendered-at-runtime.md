---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/html/dynamic-tag.ts › _dynamic_tag
---

# Write a sacrificial newline before `<pre>` content the SSR runtime renders

The HTML parser drops one newline right after a `<pre>` start tag. The translator compensates for a `<pre>` it can see (`translator/visitors/tag/native-tag.ts › getLeadingNewline` writes a newline the browser discards when content may begin with one), but two runtime paths write `<pre ...>` and then its content directly: `_dynamic_tag`'s native renderer for a tag name only known at runtime, and `html/attrs.ts › _attrs_content` for a `<pre>` whose spread supplies `content`. So content starting with a newline shows one newline fewer on the server than in a client render, which inserts it through the DOM. Write `"\n"` after the start tag when the rendered name is `pre`, as `_attr_textarea_value` already does for `<textarea>` values; this adds HTML runtime bytes only.

Check: a fixture with `<define/Body>${input.text}</define>`, `<${input.tag}>${input.text}</>` and `<pre ...(input.flag ? { content: Body } : {})/>`, `equivalent: false`, and steps `[{ tag: "pre", flag: true, text: "\nhello" }, (c) => c.querySelectorAll("pre").forEach((p) => p.setAttribute("data-len", String(p.textContent.length)))]` shows `data-len="6"` for both in `render-csr.debug.md` and `data-len="5"` in `render-ssr.debug.md`.
