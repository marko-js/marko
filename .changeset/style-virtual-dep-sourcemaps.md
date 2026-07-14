---
"@marko/compiler": patch
"@marko/runtime-tags": patch
---

Keep sourcemaps for extracted `<style>` blocks even when the main output map is skipped. The compiler no longer emits a sourcemap for entry outputs (`hydrate`, or a `page`/`load` entry) since the generated wrapper maps back to nothing useful, and the `<style>` extractor now derives its virtual dependency's sourcemap from the configured `sourceMaps` option instead of the (now conditionally disabled) Babel output setting. Together this lets a bundler integration enable `sourceMaps` for entry compiles to preserve CSS sourcemaps without also emitting a meaningless map for the entry wrapper.
