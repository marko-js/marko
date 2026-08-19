---
type: dx
impact: med
effort: med
site: packages/runtime-tags/src/html/serializer.ts › writeFormData
---

# Serialize `Blob` and `File`, including inside `FormData`

Neither type has a case in `writeUnknownObject`, and `writeFormData` aborts on any non-string entry ("`File`/`Blob` entries aren't serializable yet"), so a resumed form carrying an upload cannot be represented at all. Both hold binary content the existing `writeArrayBuffer`/`writeTypedArray` path already encodes and both rebuild from a constructor call (`new File([bytes], name, { type, lastModified })`); the work is reading the bytes and threading the async read through the boundary the way `writeReadableStream` does.

Check: `serializer.test.ts`'s "aborts on File/Blob values instead of dropping them" pins today's behavior, and a bare `new Blob(["hi"])` hits `throwUnserializable`.
