---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/html/patch.ts › _patch_dynamic_tag
---

# Keep a `<define>` body downstream of client-owned state out of a patch

A `<let>` that only the browser assigns (in a `<script>`, from an event) makes what reads it client-owned, so a patch elides those writes and the live value stays. That holds for attributes read in the tag's own section but not through a `<define>` renderer's input: with `<let/theme>` set only on the client and `<define/Btn|{ on }|><button aria-pressed=on/></define>` rendered as `<Btn on=theme === 'dark'/>`, every patch that pairs the enclosing tag rewrites the button's `aria-pressed` and class from the server's render, where `theme` is `undefined`, while the `<let>` itself keeps its value. Rendering the same `<button>` inline, reading `theme` directly, is left alone. The ownership should cross the define renderer's input the way it crosses a native attribute, or the define body should be skipped like any other client-owned group.

Check: in a patch build, a layout with the shape above and a page under it; set the `<let>` from a `<script>` on mount, then navigate to another page. The button's `aria-pressed` reverts to the server value after the patch applies; the inline `<button>` variant keeps it.
