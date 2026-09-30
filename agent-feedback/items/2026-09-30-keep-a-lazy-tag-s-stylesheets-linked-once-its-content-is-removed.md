---
type: bug
impact: med
effort: high
site: packages/runtime-tags/src/html/assets.ts › flushInline
---

# Keep a lazy tag's stylesheets linked once the content that linked them is removed

`withLoadAssets` writes a lazy tag's block assets (its stylesheet links) inline, inside the content it renders, except while a patch page's first pass has its head reserved (`_flush_head_patch`). When that content is later removed (client control flow toggling an `<if>` on any page, or a patch replacing content a patch page streamed after its first pass, such as an `<await>` body), the link goes with it. Vite's preload helper, which Marko relies on to load a lazy chunk's CSS for client renders (`dom/load.ts` › `insertLoaded`) and patches (`dom/patch-load.ts` › `startLoad`), still counts the stylesheet loaded and never relinks it, so the next render of that tag is unstyled. In-order content must link in place to hold its own paint, so the stylesheet has to outlive the content some other way: for example the client moving a lazy asset's links into `<head>` once its content resumes (the server identifying them, not a `link` query), or the asset runtime naming a lazy asset's stylesheets so a client render can relink them.

Check: in a Vite build of `<let/show=true/><button onClick() { show = !show }/><if=show><Lazy/></if>` with `import Lazy from "./lazy.marko" with { load: "render" }` and `lazy.marko` importing a `.css` file, click twice: the re-rendered `Lazy` is unstyled and no `link[rel=stylesheet]` for its CSS remains in the document.
