# Render
```html
<input
  value="a"
/>
<input
  value="a"
/>
<input
  value="a"
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
  value="a"
/>
<input
  default-value="b"
  value="a"
/>
<input
  default-value="b"
  value="a"
/>
<button>
  Update
</button>
```

# Mutations
```
UPDATE input1[value] "a" => "b"
UPDATE input2[value] "a" => "b"
```