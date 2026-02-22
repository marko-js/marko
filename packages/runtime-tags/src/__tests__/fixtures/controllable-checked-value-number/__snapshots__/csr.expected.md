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

# Mutations
```
INSERT input0, input1, input2, span
```

# Render
```js
container.querySelectorAll(`input`)[1].click();
```
```html
<input
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

# Mutations
```
UPDATE span/#text "0" => "1"
```

# Render
```js
container.querySelectorAll(`input`)[2].click();
```
```html
<input
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

# Mutations
```
UPDATE span/#text "1" => "2"
```

# Render
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

# Mutations
```
UPDATE span/#text "2" => "0"
```