---
type: bug
impact: low
effort: low
site: packages/compiler/src/babel-plugin/index.js › stripTypes
---

# Strip a tag's type arguments and type parameters with `stripTypes`

`stripTypes` runs `@babel/plugin-transform-typescript`'s visitor, which knows nothing of `MarkoTag.typeArguments` or `MarkoTagBody.typeParameters`, so `output: "source"` with `stripTypes: true` still prints them: `<foo<T>|x: T|>` comes out as `<foo<T>|x|>` and `<type-arg<string>/>` unchanged, while every other annotation in the template is removed. Tools that show a template's JavaScript form, such as the docs site's JS toggle for `marko` code blocks, then show TypeScript syntax. Clearing both fields in `stripTypes` alongside the visitor would finish the job.

Check: `compileSync("<foo<T>|x: T|>${x}</foo>", "t.marko", { output: "source", stripTypes: true }).code` starts with `<foo<T>|x|>`; expect `<foo|x|>`.
