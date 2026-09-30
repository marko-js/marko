# Render
```html
<input
  value="a1"
/>
<input
  value="b1"
/>
<div>
  a1|b1
</div>
```

# Update
```js
const input = document.querySelectorAll("input")[index];
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", { bubbles: true }));
```
```html
<input
  default-value="a1"
  value="a2"
/>
<input
  value="b1"
/>
<div>
  a2|b1
</div>
```
## Change
```
UPDATE: div::text@0 "a1" => "a2"
```

# Update
```js
const input = document.querySelectorAll("input")[index];
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", { bubbles: true }));
```
```html
<input
  default-value="a1"
  value="a2"
/>
<input
  default-value="b1"
  value="b2"
/>
<div>
  a2|b2
</div>
```
## Change
```
UPDATE: div::text@3 "b1" => "b2"
```
