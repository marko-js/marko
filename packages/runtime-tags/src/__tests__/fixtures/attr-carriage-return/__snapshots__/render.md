# Render
```html
<div
  data-x="xy"
/>
```

# Update
```js
const div = document.querySelector("div");
div.textContent = JSON.stringify(div.getAttribute("data-x"));
```
```html
<div
  data-x="xy"
>
  "x\ry"
</div>
```
## Change
```
INSERT: div::text("\"x\\ry\"")
```
