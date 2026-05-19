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

# Update
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
  default-value="hello"
  type="text"
  value="w"
/>
<span>
  w
</span>
```
## Change
```
UPDATE: span::text "hello" => "w"
```

# Update
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
  default-value="hello"
  type="text"
  value="wor"
/>
<span>
  wor
</span>
```
## Change
```
UPDATE: span::text "w" => "wor"
```

# Update
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
  default-value="hello"
  type="text"
  value="world"
/>
<span>
  world
</span>
```
## Change
```
UPDATE: span::text "wor" => "world"
```
