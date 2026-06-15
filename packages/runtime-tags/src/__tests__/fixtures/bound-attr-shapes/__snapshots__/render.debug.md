# Render
```html
<div>
  a1|b1
</div>
<input
  value="a1"
/>
<input
  value="b1"
/>
```

# Update
```js
const input = container.querySelectorAll("input")[index];
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<div>
  a2|b1
</div>
<input
  default-value="a1"
  value="a2"
/>
<input
  value="b1"
/>
```
## Change
```
UPDATE: div::text@0 "a1" => "a2"
```

# Update
```js
const input = container.querySelectorAll("input")[index];
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<div>
  a2|b2
</div>
<input
  default-value="a1"
  value="a2"
/>
<input
  default-value="b1"
  value="b2"
/>
```
## Change
```
UPDATE: div::text@3 "b1" => "b2"
```
