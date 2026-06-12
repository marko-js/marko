---
"marko": patch
---

Forward the runtime `version` through the interop translator's exports so `getRuntimeVersion` reports the installed marko version (instead of "0.0.0"). This lets bundler integrations that gate on the runtime version (like @marko/vite's `linkAssets` support) detect the feature for class API and interop apps.
