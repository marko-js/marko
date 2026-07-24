# Render
```html
<input
  id="field"
/>
<span
  id="mirror"
/>
```

# Update
```js
const input = document.querySelector("#field");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```

# Update
```js
const input = document.querySelector("#field");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```

# Update
```js
const input = document.querySelector("#field");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```

# Update
```html
<input
  id="field"
  value="hel"
/>
<span
  id="mirror"
>
  hel
</span>
<div
  id="awaited"
>
  awaited: 
</div>
```
## Change
```
INSERT: #mirror + #awaited
INSERT: #awaited::text("awaited: ")
INSERT: #mirror::text("hel")
UPDATE: #mirror::text "" => "hel"
```
