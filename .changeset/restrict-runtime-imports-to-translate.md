---
"@marko/runtime-tags": patch
"marko": patch
---

Fix the text-only `<if>` optimization importing the output-specific `_to_text` helper during the cached pre-analyze phase, which could leak the server (HTML) runtime — including the serializer — into the client bundle. Runtime helper imports are now restricted to the translate phase.
