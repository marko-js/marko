---
"@marko/compiler": minor
"@marko/runtime-tags": minor
---

Add an experimental `persisted` compile option (paired with the
`$global.persisted` render flag) that splits the request-time serialize
guards into marker/spine emission vs value emission, so persisted renders
serialize resume markers and an addressable scope spine for request-derived
content without serializing its values. Groundwork for single-page
server-first updates; output is unchanged unless both the compile option and
the render flag are set.
