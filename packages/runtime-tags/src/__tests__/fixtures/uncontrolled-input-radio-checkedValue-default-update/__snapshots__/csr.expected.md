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
  value="b"
/>
<input
  type="radio"
  value="b"
/>
<button>
  Update
</button>
```

# Mutations
```
INSERT input0, input1, input2, input3, button
```

# Render
```js
container.querySelector("button").click();
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
  default-checked=""
  type="radio"
  value="b"
/>
<input
  default-checked=""
  type="radio"
  value="b"
/>
<button>
  Update
</button>
```

# Mutations
```
UPDATE input2[checked] null => ""
UPDATE input3[checked] null => ""
```