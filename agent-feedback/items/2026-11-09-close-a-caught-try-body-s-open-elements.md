---
type: bug
impact: low
effort: high
site: packages/runtime-tags/src/html/control-flow.ts › tryBoundary
---

# Close a caught `<try>` body's open elements before streaming what follows

When an in-order `<await>` rejects after part of its `<try>` body streamed, the rest of the body is dropped, end tags of the elements it opened included. The catch range's end marker, the `@catch` content and everything after the `<try>` are then parsed inside those elements. The inline reorder runtime (`inlined-runtimes.debug.ts` › `REORDER_RUNTIME_CODE`) removes the range by walking `previousSibling` from the end marker, which no longer shares a parent with the start marker, so the streamed part of the body stays in the page and the rest of the document nests under it. What that does to later content depends on what was left open: the parser drops or moves elements under an open `<table>`, `<form>`, `<select>` or `<a>`. Only a `<try>` with `@catch` and no `@placeholder` is affected, and only when an element opens between it and the rejected `<await>`: a body with a `@placeholder` renders whole into its own reorder.

Direction: write the end tags of what the streamed chunks opened ahead of the end marker, so the range is a run of siblings again. The rest of the body's chunks (from the cut to `bodyNext`) hold those end tags; scanning them on the catch path for end tags with no open tag yields exactly the closers. Tried and rejected:

- Streaming the rest of the body's markup whole: it balances, but the dead markup is live until the reorder removes it (its `<img>`, `<script>` and custom elements load), and a body that throws mid-render needs `Chunk.render` to restore its chunk first.
- An inline script that walks up from `document.currentScript` and `document.write`s the end tags: works under the main parser, but under writable-dom 1.0.6 the script runs in the host document, whose `document.write` opens a new document and blanks the page (Chromium and Firefox, before and after load).

Check: a fixture with `<try><section><h2>title</h2><await|v|=resolveAfter("first", 1)><p>${v}</p></await><ul><li><await|v|=rejectAfter(new Error("boom"), 2)>${v}</await></li></ul></section><@catch|err|><u>${err.message}</u></@catch></try><footer>after</footer>`, `skip_csr: true` and steps `[{}, flush, flush]` snapshots `render-ssr.md` with `<h2>title</h2>` still rendered and `INSERT: section > ul > li > u + footer`.
