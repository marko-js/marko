---
"@marko/runtime-tags": patch
"marko": patch
---

Fix `<lifecycle>` `onDestroy` not running after resume when it is the only interactive feature of a component nested in control flow. The lifecycle cleanup is registered through `$signal` at runtime, which requires the scope to resume with its closest branch linked; the section is now marked so that link is serialized.
