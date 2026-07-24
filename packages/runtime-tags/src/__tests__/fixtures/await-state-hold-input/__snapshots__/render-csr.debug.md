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
```html
<input
  id="field"
/>
<span
  id="mirror"
/>
<div
  id="awaited"
>
  awaited: 
</div>
```
## Change
```
INSERT: #mirror + #awaited
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
```html
<input
  id="field"
  value="h"
/>
<span
  id="mirror"
>
  h
</span>
<div
  id="awaited"
>
  awaited: 
</div>
```
## Change
```
UPDATE: #mirror::text "" => "h"
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
```html
<input
  id="field"
  value="he"
/>
<span
  id="mirror"
>
  he
</span>
<div
  id="awaited"
>
  awaited: 
</div>
```
## Change
```
UPDATE: #mirror::text "h" => "he"
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
UPDATE: #mirror::text "he" => "hel"
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
```
## Change
```
REMOVE: #mirror + #awaited
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
  awaited: hel
</div>
```
## Change
```
INSERT: #mirror + #awaited
```
