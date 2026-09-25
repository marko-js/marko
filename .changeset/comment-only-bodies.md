---
"@marko/compiler": patch
"@marko/runtime-tags": patch
"marko": patch
---

Keep the comments of a body that has no statements, such as `<button onClick() { /* todo */ }>`, without the stray `;` that source output printed before them, and keep the comments of a `static`, `server` or `client` block that holds only comments, which were dropped. A shorthand method also keeps its directives, such as `"use strict"`. The new `parseBlock` helper in `@marko/compiler/babel-utils` parses statements as a block that holds them. A `<script>` whose body has no statements, such as `<script value() {}/>`, no longer registers an effect, which left the client template referencing a setup function it never defined.
