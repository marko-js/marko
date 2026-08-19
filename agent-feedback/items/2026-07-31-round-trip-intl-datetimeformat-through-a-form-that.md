---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/html/serializer.ts › writeIntl
---

# Round-trip `Intl.DateTimeFormat` through a form that preserves `month`/`weekday`, not `resolvedOptions()`

`Intl` serialization (added in #3566) rebuilds a formatter by feeding
`resolvedOptions()` back into the constructor, but those options are not a
faithful round trip: for `Intl.DateTimeFormat` the resolved `month` and
`weekday` fields are normalized to values that re-resolve differently in some
locales, notably `ja` and `zh`, so a date formatted on the server renders
differently once the same formatter is used after resume. That is a silent
server/client divergence in rendered text rather than a crash, which makes it
harder to notice than the unserializable-value error it replaced, and the
changeset currently records it as an accepted limitation. A fix likely needs to
capture the constructor's original `options` argument at the call site (the
compiler already sees `new Intl.DateTimeFormat(...)` in `<const>` position)
rather than recovering them from the built formatter, or to special-case the
fields whose resolved form is lossy.

Check: by server-rendering
`<const/fmt=new Intl.DateTimeFormat("ja", { month: "long", weekday: "long" })/>`
reached from browser-updating content, then comparing `fmt.format(date)` before
and after resume.
