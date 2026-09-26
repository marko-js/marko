---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/html/serializer.ts › KNOWN_FUNCTIONS
---

# Drop Node-only timers from the serializer's known functions

`KNOWN_FUNCTIONS` maps `globalThis.setImmediate` and `globalThis.clearImmediate` to bare identifiers, but browsers have neither global. A browser-read value such as `{ defer: setImmediate }` serializes as `{defer:setImmediate}`, which throws a ReferenceError in the browser and aborts the whole resume payload, where any other unknown function gets the debug "Unable to serialize" abort on the server. Direction: remove both entries.

Check: in a `node -r ~ts` script inside the repo, `new Serializer().stringifyScopes([[1, {}, { value: { defer: setImmediate } }]], { signal: { aborted: false }, state: {}, abort() {} })` returns `_=>[1,{value:{defer:setImmediate}}]`, while `{ f: () => {} }` aborts with "Unable to serialize (reading value.f)".
