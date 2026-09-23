---
type: bug
impact: low
effort: low
site: patches/@babel__generator@7.29.7.patch › MarkoTag
---

# Keep a tag var's trailing line comment from swallowing the rest of the tag

The `MarkoTag` source printer prints `node.var` with its comments inline, so a trailing line comment on a tag var ends up on the same line as whatever follows it: `output: "source"` turns `<a/x // c\n  b=1/>` into `<a/x // c b=1/>`, which no longer compiles because `b=1/>` is now part of the comment. Attribute values and spreads do not have this problem because `printWithParansIfNeeded` encloses a value that ends in a line comment across lines, but a tag var cannot be parenthesized. prettier-plugin-marko handles the same case by printing the comment as a block comment after the var (`<a/x /* c */ b=1/>`), which the printer could do too.

Check: `compileSync("<a/x // c\n  b=1/>", "t.marko", { output: "source" }).code` is `<a/x // c b=1/>`, and compiling that again fails; expect output that compiles to the same tag.
