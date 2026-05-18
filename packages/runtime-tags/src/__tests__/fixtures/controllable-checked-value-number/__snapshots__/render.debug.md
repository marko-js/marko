# Render
```html
<input
  checked=""
  type="radio"
  value="0"
/>
<input
  type="radio"
  value="1"
/>
<input
  type="radio"
  value="2"
/>
<span>
  0
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
  value="0"
/>
<input
  checked=""
  type="radio"
  value="1"
/>
<input
  type="radio"
  value="2"
/>
<span>
  1
</span>
```
## Change
```
UPDATE: span::text "0" => "1"
```

# Update
```js
container.querySelectorAll(`input`)[2].click();
```
```html
<input
  default-checked=""
  type="radio"
  value="0"
/>
<input
  type="radio"
  value="1"
/>
<input
  checked=""
  type="radio"
  value="2"
/>
<span>
  2
</span>
```
## Change
```
UPDATE: span::text "1" => "2"
```

# Update
```js
container.querySelectorAll(`input`)[0].click();
```
```html
<input
  checked=""
  type="radio"
  value="0"
/>
<input
  type="radio"
  value="1"
/>
<input
  type="radio"
  value="2"
/>
<span>
  0
</span>
```
## Change
```
UPDATE: span::text "2" => "0"
```
