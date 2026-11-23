# Render
```html
<div
  data-read="script"
/>
<div
  data-read="script"
/>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  data-read="script"
>
  clicked
</div>
<div
  data-read="script"
>
  clicked
</div>
<button />
```
## Change
```
INSERT: div:nth-of-type(1)::text("clicked")
INSERT: div:nth-of-type(2)::text("clicked")
```
