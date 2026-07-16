---
"@marko/runtime-tags": patch
"marko": patch
---

Stop silently dropping `File`/`Blob` entries when serializing a `FormData` for resumption. Previously only string entries were kept, so a resumed form reconstructed a `FormData` missing its file entries with no error. Since these values are not yet serializable, they now fail like any other unsupported value (a clear error in development, and the whole value is skipped in production) instead of shipping incomplete state.
