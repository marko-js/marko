---
"@marko/runtime-tags": patch
---

Optimize `class` attributes built from CSS module classes. A member access on a CSS module - a default/namespace import from a stylesheet, or a `<style/name>` tag's object - is now treated as a known class string, so `class=[styles.card, { [styles.active]: on }]` no longer falls back to the runtime `class` walker. Constant classes are folded into the concatenated string on the server and applied once at mount on the client, while toggles update in place. `_attr_class_item` now also handles a class that resolves to multiple space-separated tokens (eg from `composes:`). In development, a CSS module class that resolves to a non-string (a typo or a class missing from the stylesheet) logs a warning; this assertion is compiled away in optimized builds.
