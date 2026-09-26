---
"@marko/runtime-tags": patch
---

Settle a server render once: aborting `$global.signal` after the render completes no longer reports an error to the finished stream, and a completed or aborted render detaches from that signal. A value that throws while serializing (such as a getter) now aborts the whole render with its error, even inside a `<try>`, instead of leaving it pending or dropping its data, and a promise serialized with lazy loaded content holds the stream open until it settles. A `@catch` that fires while the stream consumes a `@placeholder` no longer writes the output twice, and `toString` stops an asynchronous render it throws for.
