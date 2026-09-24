---
type: bug
impact: high
effort: high
site: packages/runtime-tags/src/html/assets.ts › withPageAssets
---

# Ship a patched-in page's head assets

A full navigation emits a destination page's stylesheet `<link>` through `withPageAssets`, but a patch response never invokes it — `_template_patch` renders the page without the page-assets wrapper, and the patch protocol has no equivalent of `_flush_head`. So a persisted navigation to a page whose CSS lives in its own component `<style>` applies the markup but never loads the stylesheet, and the page renders unstyled. It only bites pages the patch does not also import as a module: a lazy `load: "render"` page pulls its CSS through the module's bundler dep graph, but a page whose shell is patched in without a client module (a static page, or one already shelled) has its stylesheet orphaned. `withLoadAssets` already carries a `writesPatches` branch (`writeWaitReady`); `withPageAssets` has none. Direction: on a patch render, reconcile the destination page's asset set against what the live document holds and ship the missing stylesheet links for the client to insert, the way shells are shipped for markup.

Check: build (not dev — dev injects component CSS through JS) a `patches: true` app with two pages, one carrying a component `<style>` and no client state, the other not; request the styled page with `accept: text/marko-patch` and the build token. The patch payload contains the page's markup but no reference to its `_page-*.css` asset, and navigating to it in the browser renders unstyled.
