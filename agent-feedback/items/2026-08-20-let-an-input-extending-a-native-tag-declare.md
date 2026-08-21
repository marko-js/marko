---
type: bug
impact: med
effort: low
site: packages/runtime-tags/tags-html.d.ts › HTMLAttributes
---

# Let an `Input` extending a native tag declare a parameterized `content`

`HTMLAttributes.content` and `SVGAttributes.content` are typed `AttrString | Marko.Body<[], void> | Marko.Template<…>`, and `@marko/language-tools` augments `Marko.Body` with a `(...params: Params)` call signature, so under `mtc` the two recipes the TypeScript docs show side by side cannot be combined: `interface Input extends Marko.HTML.Div { content?: Marko.Body<[{ id: string }]> }` fails TS2430 with "Type '[]' is not assignable to type '[{ id: string; }]'". Any reusable component that both forwards native attributes and yields a value to its body hits it, and the only way through is `Omit<Marko.HTML.Div, "content">`, which neither the docs nor the diagnostic mention. Plain `tsc` accepts the same declaration because the unaugmented `Marko.Body` is empty and falls back to a structural compare, so this only ever shows up in a real template check. Widening both declarations to `Marko.Body<any, any>` clears it, at the cost of no longer rejecting a parameterized body handed to a plain `<div>`.

Check: a tag declaring `export interface Input extends Marko.HTML.Div { content?: Marko.Body<[{ id: string }]> }` reports TS2430 on `Input` under `npx mtc`; it should check clean, as the same declaration does with `Omit<Marko.HTML.Div, "content">`.
