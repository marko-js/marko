---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/html/writer.ts › Chunk.flushScript
---

# Drop the content and effects of a requeued chunk whose `<try>` body was caught

A pending `<await>` chunk that a reorder requeued (`Chunk.flushReorder`) leaves the body's chunk chain, so `Chunk.truncate` never clears it when the `<try>` around it catches. If the await settled before the catch fired, `flushScript`'s reorder loop still streams it with everything it rendered: its HTML goes out as a reorder the `@catch` then replaces, and its effects run in the browser, although a caught body's effects are meant never to run (`flushReady` drops them for lazy parts). A requeued chunk under an aborted boundary could stream as an empty reorder whether or not it settled, which still completes the placeholder root that counts it.

Check: a fixture with this template and `steps: [{}, flush, wait, flush, wait]` logs `"caught body effect"` in `render-ssr.debug.md` › `## Console`, and `writes.debug.html` streams the caught await's markers in `<t hidden M_=c>`:

```marko
import { rejectAfter, resolveAfter } from "../../utils/resolve";

<try>
  <@placeholder>loading</@placeholder>
  <try>
    <await|a|=resolveAfter("a", 1)>
      <script>console.log("caught body effect")</script>
      <try>
        <@placeholder>inner loading</@placeholder>
        <await|b|=rejectAfter(new Error("ERROR!"), 1)>${b}</await>
      </try>
    </await>
    <@catch|err|>caught ${err.message}</@catch>
  </try>
</try>
<await|done|=resolveAfter("done", 2)>${done}</await>
```
