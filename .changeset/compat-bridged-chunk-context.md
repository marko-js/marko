---
"@marko/runtime-tags": patch
---

Thread the enclosing chunk's context into the bridged head chunk when a Marko 5 Class component renders under a Tags-API region. Previously the head chunk was built with a null context, so a Class embedded under an async/lazy Tags region lost its closest-branch association and its descendants could resume against the wrong branch (hydration mismatch).
