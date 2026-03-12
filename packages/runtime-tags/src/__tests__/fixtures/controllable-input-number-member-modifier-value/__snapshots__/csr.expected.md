# Render
```html
<input
  type="number"
  value="0"
/>
<span>
  0 number
</span>
```

# Mutations
```
INSERT input, span
```

# Render
```js
const input = container.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<input
  default-value="0"
  type="number"
  value="1"
/>
<span>
  1 number
</span>
```

# Mutations
```
UPDATE span/#text0 "0" => "1"
```

# Render
```js
const input = container.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<input
  default-value="0"
  type="number"
  value="10"
/>
<span>
  10 number
</span>
```

# Mutations
```
UPDATE span/#text0 "1" => "10"
```