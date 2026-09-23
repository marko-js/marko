---
type: bug
impact: low
effort: med
site: packages/compiler/src/babel-plugin/parser.js › onComment
---

# Keep JavaScript comments as JavaScript comments in source output

`onComment` builds a `MarkoComment` from the comment's value alone, dropping whether it was `//`, `/* */` or `<!-- -->`, and the source printer writes every one back as an HTML comment: `output: "source"` turns `// a note` into `<!-- a note-->` and `/* block */` into `<!-- block -->`. A tool that shows or rewrites source this way changes the template's comment style, and the docs site's own guideline is to use JavaScript comments in Marko files, so its type-stripped code blocks contradict it. The parser knows the kind from the comment's first characters (prettier-plugin-marko reads it the same way), so recording it on the node lets the printer write each comment back in its own syntax.

Check: `compileSync("// a note\n<div/>", "t.marko", { output: "source" }).code` starts with `<!-- a note-->`; expect `// a note`.
