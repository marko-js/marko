# Render
```html
<input
  type="number"
  value="5"
/>
<input
  type="number"
  value="5"
/>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<input
  default-value="5"
  value="abc"
/>
<input
  default-value="5"
  value="abc"
/>
<button />
```
## Change
```
UPDATE: input:nth-of-type(1)[type] "number" => null
UPDATE: input:nth-of-type(2)[type] "number" => null
```
