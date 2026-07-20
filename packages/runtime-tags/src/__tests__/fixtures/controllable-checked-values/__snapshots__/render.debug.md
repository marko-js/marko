# Render
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
<input
  type="checkbox"
  value="c"
/>
<span>
  a,b
</span>
```

# Update
```js
document.querySelectorAll(`input`)[1].click();
```
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<input
  default-checked=""
  type="checkbox"
  value="b"
/>
<input
  type="checkbox"
  value="c"
/>
<span>
  a
</span>
```
## Change
```
UPDATE: span::text "a,b" => "a"
```

# Update
```js
document.querySelectorAll(`input`)[2].click();
```
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<input
  default-checked=""
  type="checkbox"
  value="b"
/>
<input
  checked=""
  type="checkbox"
  value="c"
/>
<span>
  a,c
</span>
```
## Change
```
UPDATE: span::text "a" => "a,c"
```

# Update
```js
document.querySelectorAll(`input`)[0].click();
```
```html
<input
  default-checked=""
  type="checkbox"
  value="a"
/>
<input
  default-checked=""
  type="checkbox"
  value="b"
/>
<input
  checked=""
  type="checkbox"
  value="c"
/>
<span>
  c
</span>
```
## Change
```
UPDATE: span::text "a,c" => "c"
```
