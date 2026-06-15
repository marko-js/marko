# Render
```html
<div>
  v=v1|wrong=
</div>
<input
  value="v1"
/>
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
<div>
  v=z|wrong=
</div>
<input
  default-value="v1"
  value="z"
/>
```
## Change
```
UPDATE: div::text@2 "v1" => "z"
```
