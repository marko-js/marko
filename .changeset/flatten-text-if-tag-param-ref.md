---
"@marko/compiler": patch
"@marko/runtime-tags": patch
"marko": patch
---

Add the `Scopable` alias to `MarkoTagBody`. It was already treated as scopable by the runtime checks (`isScopable`/`isScope`, so it gets its own scope) but was missing from the `Scopable` alias group, so Babel's scope-crawl reset visitor — which is registered via that alias — never reset a tag body's bindings during an ancestor/program-level `scope.crawl()`; it appended freshly-collected references on top of stale ones. Combined with an AST mutation that moves a reference out of a removed subtree (e.g. flattening a text-only `<if>`), a tag-body parameter (`<await>` value, `<for>` item) could retain a reference into the removed nodes, making the analyzer emit invalid output such as `const  = _content_resume(...)` that crashed the bundler.
