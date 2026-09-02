---
type: unclear
impact: med
effort: low
site: packages/compiler/src/config.js › config (default export) (the hot key)
---

# Mark the `hot` `@marko/compiler` option as Marko 5 only, or implement it for Marko 6

`hot` ("bring in the hot module replacement runtime") is read only by the Marko 5 translator (`packages/runtime-class/src/translator`), so under `@marko/runtime-tags/translator` it is inert with no diagnostic — toggling it yields byte-identical `code` — and reads as current API. The sibling options from this finding (`writeVersionComment`, `ignoreUnrecognizedTags`, `hydrateInit`, `meta`) were annotated in `config.js`/`config.d.ts` in PR #3745; `hot` was deliberately left out because HMR is wanted for Marko 6, making it an unbuilt feature rather than legacy surface area, so labelling it "Marko 5 only" would be wrong. Either build it, or note that Marko 6 support is pending. Marko 5's own client half, `packages/runtime-class/src/runtime/vdom/hot-reload.js`, is untested either way — it sits at 0% and is the largest uncovered block in the repo, because a template imports it only when `hot` is set and no harness compiles that way (`components-browser` compiles `output: "dom"` without it, and `test/hot-reload` drives the server half through `marko/src/node-require/hot-reload` in Node).

Check: `compileSync("<div>hi</div>", f, { translator, output: "html", cache: new Map(), hot: true })` against the same call with `hot: false` — equal `code` under the tags translator, differing `code` under `marko/translator`.
