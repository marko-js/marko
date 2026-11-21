---
type: bug
impact: low
effort: low
site: packages/runtime-class/src/translator/taglib/core/translate-html-comment.js › default
---

# Mark the tail of the html comment's template literal

For `<html-comment>` with placeholders in dom output, the Marko 5 translator builds its template literal with `t.templateElement({ raw })` for every quasi, so none is marked as the tail; the last should be `t.templateElement({ raw }, true)`, as `@marko/compiler`'s and runtime-tags' builders do. Nothing prints differently, but any later plugin reading `quasi.tail` sees a literal with no end.

Check: `compileSync("<html-comment>a ${b} c</html-comment>", file, { translator: "marko/translator", output: "dom", ast: true })` gives a template literal whose quasis' `tail`s are `[false, false]`.
