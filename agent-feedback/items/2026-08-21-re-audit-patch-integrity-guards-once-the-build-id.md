---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/dom/patch-*.feat.ts › failPatch guards
---

# Re-audit patch integrity guards once the build-id handshake lands

An audit of every `failPatch` guard in the patch feature modules found most
protect legitimate same-build conditions and must stay regardless of any
deploy-skew handling: missing registrations mean the client bundle
tree-shook that code (the elision-friendly fail-closed path), `isFailed`
rejects channels whose lazy module failed to load, and poisoned bind
entries reject withheld handler paths. Only two kinds are plausibly
subsumed by the planned build-id/hash handshake (client and server
disagree → whole response rejects, full navigation): the missing-anchor
checks (`scope[accessor] || failPatch()` in the boundary constructs) and
the missing-shell-record checks. Each costs one `||`, so they stay as
integrity backstops for now; once the handshake ships, re-run this audit
and drop any guard whose only remaining trigger is skew.

Check: `grep -n failPatch packages/runtime-tags/src/dom/*.feat.ts` and
classify each site against the conditions above.
