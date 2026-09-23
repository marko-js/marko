---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › trackReference
---

# Narrow paths through dynamic member reads

A computed member read (`input[key]`, `items[i].content`) is read as its object whole, so every path of the object is taken: with `<@a>` and `<@b>` bodies, a child `<button ...input[input.key]/>` registers both. Recording the read's path with a wildcard segment (`[*]`, `[*, "content"]`) on the expression, while its signal still subscribes to the object, would let a path match through any key and narrow after it; Marko already evaluates property reads eagerly, so taking them as side-effect free is sound. The native spread's as-is check would need the same wildcard.

Check: `template.marko` `<let/count=0><child key="a"><@a onClick() { count++ }>A ${count}</@a><@b>B</@b></child>` with `tags/child.marko` `<button ...input[input.key]/>`: `pnpm run compile -- -o html -d template.marko` emits `_content_resume(` for both bodies.
