---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/dom/dom.ts › _style_shell
---

# Keep a dynamic `<style>`'s values when it renders inside a nested section on the client

On the client, a dynamic `<style>` inside `<if>`, `<for>` or a tag body loses its values: the section's setup runs `_style_shell` after the value writes (closure renders are emitted ahead of static setup, and `setupBranch` queues setup, so `<for>` params land first), and `_style_shell` overwrites the style text with an empty rule, wiping the declarations. A value that never changes is then never applied, so the documented per-item `<for>` styling renders unstyled until an update. `style-tag-dynamic-conditional`'s `render-csr.md` already shows the declaration inserted and then replaced by `.cM_1~*{}`. Make the shell and value writes order-independent (keep declarations already present, or write the shell before any value).

Check: a fixture `<if=input.show><style>.box { color: ${input.color}; }</style><div class="box">Hi</div></if>` with `equivalent: false` and steps `[{ show: true, color: "green" }]`: `render-csr.md`'s style text is `.cM_0~*{}` while the resumed page has `…:green;`.
