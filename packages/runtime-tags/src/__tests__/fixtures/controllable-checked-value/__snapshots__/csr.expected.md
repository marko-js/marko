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

# Mutations
```
UPDATE span/#text "a" => "b"
```

# Render
```js
container.querySelectorAll(`input`)[2].click();
```
```html
<input
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

# Mutations
```
UPDATE span/#text "b" => "c"
```

# Render
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

# Mutations
```
UPDATE span/#text "c" => "a"
```