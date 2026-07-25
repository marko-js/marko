---
"@marko/runtime-tags": patch
---

Escape a `<script>`/`<style>` body as one string on the server instead of once per interpolation. Their escapers neutralize multi-character tokens (`</script`, `<script`, `<!--`, `</style`), so a token split across adjacent interpolations was seen by neither call: `<html-script>${a}${b}</html-script>` with `a = "<"` and `b = "/script>"` closed the element and let whatever followed be parsed as markup. The same straddle applied at the boundary between static body text and an interpolation. A fully static body is now escaped at build time, so it costs no runtime work.
