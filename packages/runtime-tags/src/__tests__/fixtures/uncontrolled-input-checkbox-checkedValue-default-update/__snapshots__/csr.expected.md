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
<input
  type="checkbox"
  value="b"
/>
<input
  type="checkbox"
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
  type="checkbox"
  value="a"
/>
<input
  type="checkbox"
  value="b"
/>
<input
  default-checked=""
  type="checkbox"
  value="b"
/>
<input
  default-checked=""
  type="checkbox"
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