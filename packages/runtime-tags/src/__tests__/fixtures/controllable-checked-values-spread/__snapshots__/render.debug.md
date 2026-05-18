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
container.querySelector("input").click();
```
```html
<input
  default-checked=""
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
  b
</span>
```
## Change
```
UPDATE: span::text "a,b" => "b"
```

# Update
```js
container.querySelector("input").click();
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
<input
  type="checkbox"
  value="c"
/>
<span>
  b,a
</span>
```
## Change
```
UPDATE: span::text "b" => "b,a"
```

# Update
```js
container.querySelector("input").click();
```
```html
<input
  default-checked=""
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
  b
</span>
```
## Change
```
UPDATE: span::text "b,a" => "b"
```
