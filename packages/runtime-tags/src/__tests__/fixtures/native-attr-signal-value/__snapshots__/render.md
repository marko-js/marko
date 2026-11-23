# Render
```html
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  class="live"
/>
<input
  checked=""
  type="checkbox"
/>
<input
  checked=""
  type="checkbox"
/>
<button />
```
## Change
```
INSERT: .live, input, input
UPDATE: input:nth-of-type(2)[checked] null => ""
UPDATE: input:nth-of-type(2)[type] null => "checkbox"
```
