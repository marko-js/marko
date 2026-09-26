---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/html/writer.ts › Chunk.flushPlaceholder
---

# Stop re-emitting a `<try>`'s markers when its `@placeholder` throws on the server

When the `@placeholder` render in `Chunk.flushPlaceholder` throws, the try's `@catch` is reordered in within the same flush, but the next flush writes the try's opening markers again (`<!--M_[--><!--M_!^b-->` plus the placeholder's `<!--M_!^3-->`/`<!--M_!3-->`) and then reorders the abandoned body into those stray markers. The page ends up correct, but the stream carries duplicated main-stream markup and dead reorder chunks after `</script>`. A body that rejects instead (same try, a plain `@placeholder`) streams no such repeat. Direction: when the placeholder's boundary aborts, discard the chunk the placeholder was flushing into, as `tryBoundary`'s `onNext` does for the body chunks.

Check: `packages/runtime-tags/src/__tests__/fixtures/try-catch-placeholder-throw/__snapshots__/writes.html`: the second flush opens with `<!--M_[--><!--M_!^b-->`, already written by the first.
