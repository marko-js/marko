---
type: bug
impact: low
effort: high
site: packages/runtime-tags/src/dom/queue.ts › queueEffect
---

# Run a branch's effects in the same order on first client render and on resume

On a first client render a template's own `<script>` effects queue during `$setup`, before `$input` creates its `<if>`/`<for>`/dynamic tag branches, so the owner's effect runs before its branch's. The server writes each branch's effect registration inside the branch, ahead of its owner's, so resume runs the branch's first. An owner effect that reads what a branch effect did (or the reverse) behaves differently after resume; static child tags run first in both. Settle on one order (children first matches the server and static children) or document effect order across sections as unspecified.

Check: a fixture whose template is `<if=input.show><script>console.log("if")</script></if><script>console.log("parent")</script>` with `equivalent: false` and steps `[{ show: true }]` logs `if` then `parent` in `render-ssr.md` and `parent` then `if` in `render-csr.md`; `hoist-native-tag-var-from-dynamic` settles to `class="inner outer"` after resume and `"outer inner"` on the client.
