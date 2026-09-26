---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/util/is-only-child-in-parent.ts › getOnlyChildParentTagName
---

# Keep `<html>`, `<head>` and `<body>` out of only-child branch markers

`getOnlyChildParentTagName` accepts any native parent, so an `<if>`/`<for>` that is the only child of `<body>` or `<head>` uses that element as its marker, and `dom/control-flow.ts › setConditionalRenderer` and `loop` clear it with `textContent = ""` when the Branch goes away. These elements hold nodes Marko did not render (resume scripts, portals, third-party widgets, injected styles), and all of them are removed. The same path sets `kSkipEndTag`, which skips the `_flush_head()` that `translator/visitors/tag/native-tag.ts` writes before `</head>` under `linkAssets`, so the `__flush__` fallback in `html/writer.ts › flushChunk` prepends the page assets before `<!doctype html>` and the page renders in quirks mode. Direction: return false for `html`/`head`/`body` parents in `getOnlyChildParentTagName` so they use range markers, and add fixtures for both cases.

Check: fixture `<let/show=true>` + `<html><head><title>t</title></head><body><if=show><button onClick() { show = false }>hide</button></if></body></html>` with `skip_csr: true` and steps `[{}, (c) => { c.body.append(c.createElement("aside")) }, click]`: the click logs `REMOVE: button, aside`. Fixture `<!doctype html>` + `<html><head><for|h| of=input.styles><link rel="stylesheet" href=h></for></head><body><div>x</div></body></html>` with `skip_csr: true` and `steps: [{ styles: ["/a.css"] }]`: `html.bundle.debug.js` passes `"</head>"` to `_for_of` with no `_flush_head()`, and a `node -r ~ts` script at the repo root that awaits `template.render({ styles: ["/a.css"] }).toString()` on the `template` export of the fixture's `dist/debug/html/main.mjs` prints `<script async type=module src="template.marko.page.mjs"></script><!doctype html>…`.
