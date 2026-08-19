---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/dom/dom.ts › _attr_content
---

# Latch `_attr_content` so a childless spread does not retain the branch runtime

`canHaveAttrContent` (`visitors/tag/native-tag.ts`) flips a spread on a childless non-void element from `_attrs` to `_attrs_content`, and `_attr_content` is the sole retainer of `setConditionalRenderer`, `createAndSetupBranch` and `subscribeToScopeSet` — so `<div ...x/>` drags `control-flow.ts`, `renderer.ts`, `scope.ts`, `abort-signal.ts` and +1474 raw bytes of `dom.ts` into a page with no `<if>`, `<for>` or custom tag: dom 5610/2490 versus 3948/1862 for `<div ...x>hi</div>`, more than doubling an otherwise 2.6 kB page. Routing `_attr_content`'s body through a latch (the technique `_attrs_script` already uses for controllables) recovers -1402 min / -555 brotli, verified synthetically and on the `controllable-dialog-open-spread` fixture (6351/2748 → 4945/2206); the gate is complete because `renderer.ts` › `_content` is the only place the runtime mints a client `Renderer` (`dom/compat.ts` › `createRenderer` and `dom/load.ts` both route through it), and module evaluation of the producing chunk necessarily precedes production of the value. Install it from a translator-emitted top-level statement in programs that emit `_content`/`_content_resume`/`_content_closures`, not from `renderer.ts` module scope, which would force `renderer.ts` → `control-flow.ts` and newly cost a CSR-only entry ~865 raw bytes. Reach is narrow — only 4 of 964 fixtures emit `_attrs_content` under `isOptimize`, 3 of which already ship a `_content`, and the archetypal `<div ...input/>` library component does _not_ pay because known-attr resolution sees through its call sites. The latch stands alone: `_attr_content` deliberately does not enable branch machinery (its branch is a leaf), so nothing here has to also carry a branches-enable.

Check: TODO
