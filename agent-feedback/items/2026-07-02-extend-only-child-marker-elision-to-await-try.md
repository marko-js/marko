---
type: perf
impact: low
effort: high
site: packages/runtime-tags/src/translator/core/await.ts › analyze
---

# Extend only-child marker elision to `<await>`/`<try>`

`<await>` and `<try>` always create their own `#text` marker binding in analyze, so neither takes the `analyzeNodeBinding` path (`util/is-only-child-in-parent.ts`) that `<if>`/`<for>`/`<show>` use to address the parent element instead: `<div><try><b>hi</b><@catch>x</@catch></try></div>` clones `<div><!></div>` and walks a Replace, where the same `<if>` clones `<div></div>` with a Get. DOM `_try` already accepts an element through `setConditionalRenderer`, but `_await_promise` and `_await_content` (`dom/control-flow.ts`) insert before, remove and replace the marker as a sibling, and HTML `_try`'s streamed `@placeholder` and branch marks assume one too, so the change needs element-parent paths in the await runtime (bytes in every bundle using `<await>`), the HTML writer and resume. Direction: route `<try>` first, since its DOM side works as is, and measure the await runtime cost before extending it.

Check: `pnpm run compile -- -o dom` on `<div><try><b>hi</b><@catch>x</@catch></try></div><p><await|v|=input.p><b>${v}</b></await></p><div><if=input.c><b>hi</b></if></div>` gives `"<div><!></div><p><!></p><div></div>"`.
