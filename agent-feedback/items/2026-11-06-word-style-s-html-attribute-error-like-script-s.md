---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/core/style.ts › assertNoStyleAttributes
---

# Word `<style>`'s html-attribute error like `<script>`'s

`assertNoStyleAttributes` throws "The `style` does not support html attributes.", which has no `<style>` form and no docs link. The matching error in `core/script.ts` › `analyze` reads "The [`<script>` tag](…#script) does not support html attributes.". The shared suffix `htmlStyleTagAlternateMsg` (`util/style-interpolation.ts`) also puts its link on the wrong words. It links "native html [`<style>` tag]" to the core `<style>` docs, while `htmlScriptTagAlternateMsg` links the alternative, "[`html-script` core tag](…#html-script--html-style)". Start the message with "The [`<style>` tag](https://markojs.com/docs/reference/core-tag#style)" and move the suffix's link onto `html-style` (`#html-script--html-style`). The style interpolation errors share that suffix, so their snapshots change too.

Check: compare `packages/runtime-tags/src/__tests__/fixtures/error-style-attrs/__snapshots__/error-compile-dom.txt` with `error-script-attrs/__snapshots__/error-compile-dom.txt`.
