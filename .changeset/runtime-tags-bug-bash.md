---
"@marko/runtime-tags": patch
---

Fix a batch of runtime and translator bugs:

- Sibling dynamic attribute tags first discovered within a single control-flow branch now share a group, so the DOM output no longer assigns to an undeclared variable (ReferenceError) and correctly delivers each tag's reactive value.
- Multi-segment `<style.module.css>` shorthand extensions now compile instead of being rejected as unsupported html attributes.
- Optimized builds no longer emit the dev-only `_assert_init` wrapper for derived own-variable reads (the guard read a stale config value instead of the active `optimize` option).
- Known attribute lookups no longer resolve `Object.prototype` members for attribute names like `constructor` or `toString`.
- `$signal` deduplication is keyed correctly for the first expression in a section, avoiding a duplicate abort controller and reset.
- A serialized `RegExp` whose source contains `<` is now escaped so it cannot break out of the inline resume `<script>`.
- An `Error` serialized with an explicitly falsy `cause` (`0`, `""`, `false`, `null`) now preserves the cause on resume instead of dropping it.
- An uncontrolled `<select>` no longer force-selects an empty/falsy-value `<option>`.
- A controlled-checked `<input>` (e.g. a radio button) no longer drops its static `value` attribute; the controlled-attribute skip is now scoped per branch consistently in both the server and client runtimes.
- Rendering a Marko 5 class component as tags with `null` input no longer throws.
