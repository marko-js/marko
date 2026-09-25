---
"@marko/compiler": patch
---

Keep each comment in its own syntax in `output: "source"`, which printed `// a note` and `/* a note */` as `<!-- -->` HTML comments. The parser records the syntax on a new `MarkoComment.kind` field (`"html"`, `"line"` or `"block"`), which the `t.markoComment(value, kind)` builder also takes.
