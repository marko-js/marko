# Render
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<input
  type="checkbox"
  value="b"
/>
<span>
  a,z
</span>
```

# Update
```js
document.querySelector(`input[value=b]`).click();
```
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<input
  checked=""
  type="checkbox"
  value="b"
/>
<span>
  a,z,b
</span>
```
## Change
```
UPDATE: span::text "a,z" => "a,z,b"
```
