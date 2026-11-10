---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/dom/control-flow.ts › _dynamic_tag
---

# Reject content on a dynamic `<textarea>` in the client too

The server's `_dynamic_tag` throws in debug builds when a dynamic tag renders a `<textarea>` with content ("A dynamic tag rendering a `<textarea>` cannot have `content` and must use the `value` attribute instead."), but the client's `_dynamic_tag` has no such check: a client render puts the body or `content=` into the element. The same page fails on the server and renders on the client in one debug build, so the check belongs on both sides, in the client's native branch beside the server's.

Check: a fixture whose `template.marko` is `<${input.tag}>Hello</>` with `steps: [{ tag: "textarea" }]` and `error_html: true, skip_optimize: true` writes the error to `ssr.error.debug.txt` while its `render.debug.md` shows `<textarea>Hello</textarea>`.
