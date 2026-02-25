# Render
```html
<input
  type="checkbox"
/>
<input
  type="checkbox"
/>
<input
  type="checkbox"
/>
<button>
  Update
</button>
```

# Mutations
```
INSERT input0, input1, input2, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<input
  type="checkbox"
/>
<input
  default-checked=""
  type="checkbox"
/>
<input
  default-checked=""
  type="checkbox"
/>
<button>
  Update
</button>
```

# Mutations
```
UPDATE input1[checked] null => ""
UPDATE input2[checked] null => ""
```