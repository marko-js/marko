---
"@marko/runtime-tags": patch
---

Escape object-`style` attribute values on SSR so a value containing `;`/`{` can't inject extra declarations or rules, and so an invalid value is dropped the same way `el.style.setProperty` drops it on the client — fixing an SSR/CSR divergence and a server-only CSS-injection surface for `<div style={ prop: value }/>`.
