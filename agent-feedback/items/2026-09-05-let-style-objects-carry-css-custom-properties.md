---
type: dx
impact: med
effort: low
site: packages/runtime-tags/tags-html.d.ts › Marko.CSS.Properties
---

# Let style objects carry CSS custom properties

`Marko.CSS.Properties extends csstype.PropertiesHyphen`, which has no index signature, so any `--*` key in a `style` object is a type error: `<div style={ "--brand": input.hue }>` fails `mtc` with TS2353, `'"--brand"' does not exist in type 'Properties | AttrStyle[]'`. The runtime supports it: `stringifyStyleObject` in `packages/runtime-tags/src/common/helpers.ts` writes keys verbatim, and its debug warning only fires for camelCase names, not `--` ones.

Handing a template value to scoped CSS is the ordinary reason to reach for an inline style, and the only way past the types today is to build the string by hand, which drops checking on the real properties beside it. An index signature keyed on a `--` template literal type would admit custom properties and leave the rest of the object checked:

```ts
export interface Properties extends csstype.PropertiesHyphen {
  [key: `--${string}`]: string | number | undefined;
}
```

Check: `<div style={ "--brand": "tomato", color: "red" }>x</div>` fails `mtc` with TS2353 on `"--brand"`, while `_attr_style({ "--brand": "tomato", color: "red" })` from `@marko/runtime-tags/debug/html` returns `" style=--brand:tomato;color:red"`.
