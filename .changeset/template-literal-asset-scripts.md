---
"@marko/runtime-tags": patch
---

Write the HTML that lazy asset scripts insert (a lazy module's stylesheets copied into the head, a load trigger's module scripts) as a template literal instead of a double-quoted string, so its attribute quotes no longer need escaping and the page is a few bytes smaller per asset.
