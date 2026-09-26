---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/dom/resume.ts › init
---

# Anchor embed removal on a top-level server marker, and only for embed renders

`render.m` inserts the embed removal anchor Text right after the first batch's last visit, which can sit inside a branch or inside an element that `loop`/`setConditionalRenderer` clear with `textContent = ""`. `initEmbedded`'s MutationObserver treats the anchor's disconnection as removal of the whole embed: it destroys every scope in `scopeLookup` and deletes `curRenders[renderId]`, so emptying a trailing list aborts `$signal` of an embed that is still mounted. The insertion is also gated only on the module-global `embedRenders` existing, so a page render sharing the runtime with any embed gets an anchor too and can be torn down the same way. Direction: have the server write a bare `<!--{prefix}-->` at top level in an embed render's final flush (the inline walker already stores it at `lookup[""]`) and anchor on that, and only for renders started through `initEmbedded`.

Check: an `embedded: true, skip_csr: true` fixture with template `<script>$signal.onabort = () => console.log("cleaned up");</script><let/items=[1, 2]/><button onClick() { items = items.length ? [] : [3] }>toggle</button><ul><for|item| of=items><li>${item}</li></for></ul>` and steps `[{}, click the button]`: `render.md` logs "cleaned up" when the list empties, though the embed is still in the document.
