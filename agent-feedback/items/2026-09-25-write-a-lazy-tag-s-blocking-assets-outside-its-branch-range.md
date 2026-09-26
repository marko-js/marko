---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/html/assets.ts › withLoadAssets
---

# Write a lazy tag's blocking assets outside the branch range it renders in

`withLoadAssets` writes `flush(g, "")`, which includes the lazy asset's block parts such as its stylesheet `<link>`, inline where the lazy tag first renders, and that is often inside an `<if>`/`<for>` branch range. When the client destroys that branch it removes the page's only copy of the stylesheet, and recreating the branch renders the lazy template from its already loaded module, so nothing re-adds the stylesheet and the content comes back unstyled. Production builds, where the stylesheet is a `<link>` block part, hit it. Direction: emit block parts where no client branch owns them (with the head flush while it is still pending, otherwise a position or script that lands them in `<head>`), and cover it with an `@marko/vite` fixture.

Check: in the `@marko/vite` repo (marko-js/vite), copy `src/__tests__/fixtures/isomorphic-link-assets` to a new fixture whose `src/tags/lazy.marko` is `<style>.lazy-styled { color: blue }</style><span.lazy-styled>lazy</span>` and whose template is `import Lazy from "./tags/lazy.marko" with { load: "render" }` + `<let/open=true><layout><div#app><button#toggle onClick() { open = !open }>toggle</button><if=open><Lazy/></if></div></layout>`, with steps that click `#toggle` twice and then append a `<pre>` to `#app` listing `document.querySelectorAll('link[rel="stylesheet"], style')`. `pnpm test:update -- --grep <fixture>` writes a `build.expected.md` where the `<link href="/assets/lazy-[hash].css">` is removed with the branch and the list is empty after `<span class="lazy-styled">` renders again. The fixture runs against `@marko/vite`'s installed `@marko/runtime-tags`, whose `withLoadAssets` matches this repo's; link the workspace build to test a fix.
