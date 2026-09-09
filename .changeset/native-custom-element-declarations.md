---
"@marko/compiler": patch
"@marko/runtime-tags": patch
"marko": patch
---

Keep manifest-discovered custom elements native at runtime and load their registration modules only in browser bundles, including static page entries. Expose attributes through declaration-only virtual `.d.marko` files instead of runtime wrapper templates. Support packages with restrictive exports and safe fallback for unsupported manifest types.
