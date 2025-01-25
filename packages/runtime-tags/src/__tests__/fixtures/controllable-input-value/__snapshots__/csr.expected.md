# Render
```html
<input
  type="text"
  value="hello"
/>
<span>
  hello
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
  type="text"
  value="w"
/>
<span>
  w
</span>
```

# Mutations
```
UPDATE span/#text "hello" => "w"
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
  type="text"
  value="wor"
/>
<span>
  wor
</span>
```

# Mutations
```
UPDATE span/#text "w" => "wor"
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
  type="text"
  value="world"
/>
<span>
  world
</span>
```

# Mutations
```
UPDATE span/#text "wor" => "world"
```