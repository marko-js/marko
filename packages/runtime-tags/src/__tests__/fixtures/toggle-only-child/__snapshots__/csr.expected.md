# Render `{"value":"Hello"}`

```html
<div>
  <span>
    Hello
  </span>
</div>
<input
  value="Hello"
/>
```

# Mutations
```
INSERT div, input
```

# Render
```js
const input = container.querySelector("input");
input.value = value;
input.dispatchEvent(new input.ownerDocument.defaultView.Event("input", {
  bubbles: true
}));
```
```html
<div />
<input />
```

# Mutations
```
REMOVE span in div
```

# Render
```js
const input = container.querySelector("input");
input.value = value;
input.dispatchEvent(new input.ownerDocument.defaultView.Event("input", {
  bubbles: true
}));
```
```html
<div>
  <span>
    World
  </span>
</div>
<input
  value="World"
/>
```

# Mutations
```
INSERT div/span
UPDATE div/span/#text " " => "World"
```

# Render
```js
const input = container.querySelector("input");
input.value = value;
input.dispatchEvent(new input.ownerDocument.defaultView.Event("input", {
  bubbles: true
}));
```
```html
<div>
  <span>
    !
  </span>
</div>
<input
  value="!"
/>
```

# Mutations
```
UPDATE div/span/#text "World" => "!"
```