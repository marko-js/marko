---
type: bug
impact: low
effort: low
site: packages/compiler/src/babel-plugin/parser.js › onOpenTagEnd
---

# Give a shorthand `.class` one precedence against a spread

`onOpenTagEnd` merges a shorthand class into an explicit `class` attribute where that attribute sits, but with no explicit `class` it appends a new `class` after every attribute, spreads included. So whether a spread's `class` overrides the shorthand depends on an unrelated attribute: `<div.foo ...input.attrs/>` writes `class=foo` and excludes `class` from the spread (the shorthand wins), while `<div.foo class="bar" ...input.attrs/>` compiles to `_attrs_content({ class: "foo bar", ...input.attrs })` (the spread wins). Pick one rule, most naturally source order, where the shorthand is written before every attribute so a later spread wins in both cases, and pin both shapes in a fixture. The synthesized attribute carries no `start`, and `packages/runtime-tags/src/translator/core/style.ts › assertNoStyleAttributes` relies on that to recognize the `<style.less>` extension class, so a fix that gives it a location needs a structural marker there instead.

Check: `pnpm run compile -- -o html -d` on `<div.foo ...input.attrs/>` emits `_html("<div class=foo")` plus `_attrs_partial_content(input.attrs, { class: 1 }, …)`, and on `<div.foo class="bar" ...input.attrs/>` emits ``_attrs_content({ class: `${"foo"} ${"bar"}`, ...input.attrs }, …)``.
