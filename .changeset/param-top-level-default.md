---
"@marko/runtime-tags": patch
---

Fix default values on top level tag parameters (eg `<my-tag|a, b = a|>`) being dropped in the DOM output, which caused a crash or stale content client side. Default values in tag parameters and destructured tag variables are now represented uniformly in the compiler and defaulted values are consistently resumable. Defaults whose fallback needs no state compile to native parameter defaults in the DOM output.
