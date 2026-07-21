---
"marko": patch
---

Fix Tags-API → Class-API interop attribute/event bridge: multi-word custom events written with a camelCase handler (`onValueChanged`) now map to the kebab event name the Class API emits (`value-changed`) instead of a collapsed `valuechanged`, so the listener fires; and a non-function attribute matching `on[-A-Z]` (e.g. `onLabel="…"`) is now passed through to the child's `input` instead of being silently dropped.
