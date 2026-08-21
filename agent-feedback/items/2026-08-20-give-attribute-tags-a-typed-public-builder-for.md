---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/common/attr-tag.ts › attrTags
---

# Give attribute tags a typed public builder for stories and tests

There is no supported way to hand a component repeated attribute tags as data. `Marko.AttrTag<T>` is `T & Iterable<T>`, so `Tpl.render({ option: [{ value, label }] })` fails TS2322 ("is missing the following properties … value, label"), and the array is not merely a typing inconvenience — `<for|o| of=input.option>` iterates it, but the singular read `input.option.value` that the cheatsheet documents as the first tag renders empty, so a story driving a component this way silently exercises a different shape than the template does. The builders that produce the real shape do ship (`attrTag`/`attrTags`, reachable as `marko/common/attr-tag`), but they are undocumented and typed against the internal `Attrs & { [rest]: Attrs[] }`, so `attrTags(first, o)` neither accepts nor returns a `Marko.AttrTag<T>` (TS2345 and TS2322). Give them generic signatures over `Marko.AttrTag<T>`, name a public entry point, and say in `packages/runtime-tags/cheatsheet.md` that an array is not one.

Check: with a tag declaring `option?: Marko.AttrTag<{ value: string; label: string }>`, both `Tpl.render({ option: [{ value: "us", label: "US" }] })` and `let first: Marko.AttrTag<…> | undefined; first = attrTags(first, o)` fail `npx mtc` (TS2322 / TS2345); the builder form should check clean without a cast.
