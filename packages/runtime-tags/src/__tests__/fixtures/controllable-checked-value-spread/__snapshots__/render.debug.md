# Render
```html
<input
  checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  type="radio"
  value="c"
/>
<span>
  a
</span>
```

# Update
```js
container.querySelectorAll(`input`)[1].click();
```
```html
<input
  default-checked=""
  type="radio"
  value="a"
/>
<input
  checked=""
  type="radio"
  value="b"
/>
<input
  type="radio"
  value="c"
/>
<span>
  b
</span>
```
## Change
```
UPDATE: span::text "a" => "b"
```

# Update
```js
container.querySelectorAll(`input`)[2].click();
```
```html
<input
  default-checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  checked=""
  type="radio"
  value="c"
/>
<span>
  c
</span>
```
## Change
```
UPDATE: span::text "b" => "c"
```

# Update
```js
container.querySelectorAll(`input`)[0].click();
```
```html
<input
  checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  type="radio"
  value="c"
/>
<span>
  a
</span>
```
## Change
```
UPDATE: span::text "c" => "a"
```
