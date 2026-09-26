# Render
```html
<input
  name="x"
  type="checkbox"
  value="yes"
/>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<input
  default-checked=""
  name="y"
  type="checkbox"
  value="yes"
/>
<button />
```
## Change
```
UPDATE: input[checked] null => ""
UPDATE: input[name] "x" => "y"
```
