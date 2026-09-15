---
type: bug
impact: high
effort: high
site: packages/runtime-tags/src/html/serializer.ts › writeScope
---

# Apply scope writes before a patch frame dereferences them

A patch response's promise-resolution frame can dedup-reference data another frame registers — `did:_.g=_(0)["$global:"].params.did` reads root-scope data the response's root partial frame carries — and the client evaluates the resolution frame's registrations before the root scope's write has applied, so the reference reads `undefined` and the whole patch falls back to a document load (`TypeError: Cannot read properties of undefined (reading '$global:')`, and the same shape as `reading 'PatchReady:ready:…'` when the dangling reference is a ready guard). Payload order is correct (the `"$global:"`-carrying frame precedes the resolution frame), so the defect is apply order inside `commitFlush`/`processResumes`, or the serializer choosing a cross-frame reference where a self-contained value is required. Seen on every patch navigation of a page whose awaited content settles after the placeholder flush while the target page's lazy module is still loading; the fallback warning ("a frame did not apply") masks it in casual testing.

Check: against a marko-run app with `patches: true`, a lazy page whose `<try>` placeholder flushes before an awaited input promise settles, request the page with `accept: text/marko-patch` and the build token: the payload contains a `(_.x.f(_.x={…_(0)["$global:"]…}))` frame; in the browser the navigation logs the TypeError above and falls back. Server bytes are identical with the pre-#4172 double-`delete` semantics, so the branch-id release is not the trigger.
