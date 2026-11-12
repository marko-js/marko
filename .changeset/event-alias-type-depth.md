---
"@marko/runtime-tags": patch
"marko": patch
---

Type the `on-*` event aliases (and Marko 5's deprecated lower-cased ones) from their handler on the declaring interface instead of polymorphic `this`, which made TypeScript 5 and 6 fail with "Type instantiation is excessively deep and possibly infinite" (TS2589) when a mapped type or intersection over a native tag's attributes redeclared an alias.
