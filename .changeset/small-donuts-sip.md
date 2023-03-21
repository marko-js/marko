---
"@marko/translator-default": patch
"@marko/compiler": patch
"marko": patch
---

Reduce script parsing restrictions added by Babel.
This was causing Babel to error when parsing partial scripts.

```marko
static const x = 1;
export { x };
```

Before this change in the above code Babel would error when parsing `export { x }` saying `x` was not previously defined. This is because Marko parses these statements in isolation.
