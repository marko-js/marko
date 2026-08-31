# Render
```html
<input />
```

# Update
```js
const input = document.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", { bubbles: true }));
```
```html
<input
  value="w"
/>
w
```
## Change
```
UPDATE: ::text "" => "w"
```

# Update
```js
const input = document.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", { bubbles: true }));
```
```html
<input
  value="wor"
/>
wor
```
## Change
```
UPDATE: ::text "w" => "wor"
```

# Update
```js
const input = document.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", { bubbles: true }));
```
```html
<input
  value="world"
/>
world
```
## Change
```
UPDATE: ::text "wor" => "world"
```
