---
"@marko/runtime-tags": patch
---

Render known tag content passthroughs (`<${input.x}/>` with no tag variable, arguments, attributes or body) through a leaner `_dynamic_tag_content` signal instead of the general `_dynamic_tag`. When a known custom tag or `<define>` tag forwards statically known body content, the parent now calls this specialized signal, which skips renderer normalization, the native (string) tag branch, tag variables and parameter handling. Where that content branch is included in the client build (e.g. mounted inside a client-toggled `<if>`), this drops the heavy `_dynamic_tag` dependencies and roughly halves the bundled cost of that code. Server-rendered content is tree-shaken from the client as before, so those bundles and resume behavior are unchanged.
