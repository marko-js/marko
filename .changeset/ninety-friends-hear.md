---
"@marko/compiler": patch
---

Fix a `//# sourceMappingURL=` comment in a template's code (after an `import`, in a `<script>`, in an event handler) being taken as the template's input source map: the compiled source map was rewritten through the map that comment named, so it no longer pointed at the template; a named `.map` file was read from disk past the `fileSystem` option; and `source` and `migrate` output dropped the comment.
