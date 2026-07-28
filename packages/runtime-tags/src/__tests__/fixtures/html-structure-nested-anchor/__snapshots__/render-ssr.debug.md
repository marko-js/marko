# Render
```html
<a
  href="#outer"
>
  outer 
</a>
<a
  href="#inner"
>
  inner
</a>
```
## Console
```
ERROR "Invalid HTML structure. The browser will not build the DOM this markup describes, so hydration will not match:\n  `<a>` closes the open `<a>` early.\n  at packages/runtime-tags/src/__tests__/fixtures/html-structure-nested-anchor/template.marko:3:3"
ERROR "Invalid HTML structure. The browser will not build the DOM this markup describes, so hydration will not match:\n  `</a>` has no matching start tag."
```
