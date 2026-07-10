---
"@marko/runtime-tags": patch
---

Fix a dynamic tag silently ignoring a switch between two instances of the same content section (e.g. two `<define>` contents from two instances of one provider tag, or the list-detail pattern `<${selected.content}/>`). The change check compared only the shared content id, so no teardown or re-render occurred and closures stayed subscribed to the old owner. Renderers now also compare their owner scope, and SSR serializes an owned renderer's registered reference so resumed slots stay instance-aware.
