---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/util/writer.ts › markNode
---

# Resolve a marked `<html>` element's node on resume

`markNode` writes a marked `<html>` element's marker into the stream trailer with its deferred end tag, and `native-tag.ts` › `exit` says that marker "resolves to the root". `State.joinFlush` appends the trailer after the flush's last script, so no walk reaches the comment, and nothing in `dom/resume.ts` resolves the accessor another way. The scope's node stays `undefined`: the first update of a stateful `<html>` attribute throws, and a handler on `<html>` throws in `_on` during resume. Direction: have resume resolve that accessor to `document.documentElement`, which needs no marker.

Check: a fixture with `<let/dark=false/><html class={ dark }><head><title>x</title></head><body><button onClick() { dark = !dark }>toggle</button></body></html>`, `skip_csr: true` and steps `[{}, click]` fails `ssr` with `TypeError: Cannot read properties of undefined (reading 'classList')`.
