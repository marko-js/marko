# Render
```html
<input
  value="a"
/>
<p
  id="out"
>
  -
</p>
```

# Update
```js
const input = document.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = "b";
input.dispatchEvent(new window.Event("input", { bubbles: true }));
```
```html
<input
  value="a"
/>
<p
  id="out"
>
  b
</p>
```
## Change
```
UPDATE: #out::text "-" => "b"
```
