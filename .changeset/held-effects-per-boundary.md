---
"@marko/runtime-tags": patch
---

Keep the effects of content streamed before a `<try>` when its `@catch` replaces a body that was still streaming, including lazily loaded content and content a `@placeholder` swapped in meanwhile. The caught body's own effects, lazy content and placeholders still drop, and so now do those of a caught `<try>` inside content streamed out of order. Effects written by the page before lazily loaded content that holds the stream now run with the page, instead of waiting for that content's module. Held effects of lazily loaded content now run in stream order.
