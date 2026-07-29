---
"@marko/runtime-tags": patch
---

A persisted build now exposes its patch renderer on the template and publishes the client applier on `globalThis.__marko_apply_patch__`, so a framework can serve and apply a patch without importing the runtime.
