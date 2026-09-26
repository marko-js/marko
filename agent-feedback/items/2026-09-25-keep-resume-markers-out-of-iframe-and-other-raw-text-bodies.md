---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/is-non-html-text.ts › isTextOnlyNativeTag
---

# Keep resume markers out of `<iframe>` and other raw-text bodies

The page parser reads an `<iframe>` body as raw text, but `isTextOnlyNativeTag` recognizes only tags whose taglib entry sets `parseOptions.text` (`script`, `style`, `textarea`, `title`), so `<iframe>${n}</iframe>` gets a text resume comment that the parser folds into the iframe's text, and the first update after resume throws `Cannot read properties of undefined (reading 'data')` in `_text`. A string dynamic tag naming a raw-text element fails the same way, since `html/dynamic-tag.ts › _dynamic_tag` writes its content with resume comments: `<${input.tag}>${n}</>` with `tag: "xmp"` throws on the first click. Direction: treat `iframe` (and `noembed`/`noframes`) as text-only in `isTextOnlyNativeTag` so its body is written as one text like `<title>`, and have `_dynamic_tag` reject raw-text names that have content under MARKO_DEBUG.

Check: fixture `<let/n=0>` + `<iframe>${n}</iframe>` + `<button onClick() { n++ }>${n}</button>` with `skip_csr: true` and steps `[{}, click]`: the ssr modes throw `reading 'data'` in `_text`. The same with `<${input.tag}>${n}</>` in place of the iframe and `steps: [{ tag: "xmp" }, click]`.
