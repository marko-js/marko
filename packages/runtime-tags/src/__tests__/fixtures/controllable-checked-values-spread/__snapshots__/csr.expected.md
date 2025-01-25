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

# Mutations
```
INSERT input0, input1, input2, span
```

# Render
```js
container.querySelector("input").click();
```
```html
<input
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

# Mutations
```
UPDATE span/#text "a,b" => "b"
```

# Render
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

# Mutations
```
UPDATE span/#text "b" => "b,a"
```

# Render
```js
container.querySelector("input").click();
```
```html
<input
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

# Mutations
```
UPDATE span/#text "b,a" => "b"
```