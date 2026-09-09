---
"@marko/compiler": patch
"@marko/runtime-tags": patch
"marko": patch
---

Keep manifest-discovered custom elements native at runtime and load their registration modules only in browser bundles, including static page entries. Expose attribute types and documentation directly as native taglib metadata without wrapper templates or `.d.marko` files. Support packages with restrictive exports.
