---
"@marko/runtime-tags": patch
"marko": patch
---

Support serializing `BigInt64Array` and `BigUint64Array` for resumption. These views previously aborted with `Unable to serialize` because instance dispatch and the internal `TypedArray` type only covered number-backed arrays. They now round-trip, emitting bigint element literals with the `n` suffix and using the compact length form for zero-filled views.
