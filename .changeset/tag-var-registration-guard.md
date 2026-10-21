---
"@marko/runtime-tags": patch
---

A page that passes a child tag's returned function to another tag, or whose child reads the function it returns in a `<script>`, no longer throws `_resumed[registryId] is not a function` on resume. The page links the tag variable's registration only when its value can change in the browser, where the page's module that registers it loads.
