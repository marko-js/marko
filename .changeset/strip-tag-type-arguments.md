---
"@marko/compiler": patch
---

Strip a tag's type arguments and type parameters with `stripTypes`, so `output: "source"` prints `<foo<T>|x: T|>` as `<foo|x|>` and `<foo<string>/>` as `<foo/>`, like every other type annotation in the template.
