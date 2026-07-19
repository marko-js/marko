---
"@marko/runtime-tags": patch
---

Speed up server-side scope serialization. Numeric scope properties now serialize in a single buffered write instead of dispatching through the generic value serializer, repeated scope references (`_(id)`) are memoized, and the string-escaping fast path skips the slower unicode regex for its safe-character check. Serialized output is byte-for-byte unchanged; production renders of data-dense pages (grids, tables, feeds) serialize noticeably faster.
