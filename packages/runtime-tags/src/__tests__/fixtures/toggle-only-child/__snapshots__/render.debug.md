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

# Update
```js
const input = container.querySelector("input");
input.value = value;
input.dispatchEvent(new input.ownerDocument.defaultView.Event("input", {
  bubbles: true
}));
```
```html
<div />
<input
  default-value="Hello"
/>
```
## Change
```
REMOVE: div > span
```

# Update
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
  default-value="Hello"
  value="World"
/>
```
## Change
```
INSERT: div > span
UPDATE: div > span::text " " => "World"
```

# Update
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
  default-value="Hello"
  value="!"
/>
```
## Change
```
UPDATE: div > span::text "World" => "!"
```
