---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/get-declared-binding-expression.ts › getDeclaredBindingExpression
---

# Declare a destructured tag variable whose rest element is serialized

When a custom or dynamic tag's variable is destructured with a rest element (`<child/{ count, ...rest }/>`) and `rest` is read on the client, HTML serializes the whole tag variable binding (`$pattern`), and `getDeclaredBindingExpression` returns the identifier `$pattern`, which the HTML output never declares: it only emits `let { count, ...rest } = child_default({})`. The server render then throws `ReferenceError: $pattern is not defined` from the section's `_scope` (or `_var_scope` for a dynamic tag), in debug and optimized builds. Direction: when the whole value of a destructured tag variable is serialized, declare it in HTML (`const $pattern = child_default({})` before destructuring from it), or serialize the `rest` binding in its place.

Check: fixture with `tags/child.marko` = `<let/n=0><p>n ${n}</p><return={ count: n, inc() { n++ } }>` and `template.marko` = `<child/{ count, ...rest }/><button onClick() { rest.inc() }>${count}</button>`, steps `[{}, click]`: both `ssr` runs fail with `ReferenceError: $pattern is not defined`. The same happens with `import Child from "./tags/child.marko"` + `<${input.show && Child}/{ count, ...rest }/>` and steps `[{ show: true }, click]`.
