# Render
```html
<input
  value="init"
/>
<div
  class="custom"
/>
<p>
  init
</p>
```

# Update
```js
document
.querySelector("div.custom") 
.dispatchEvent(new document.defaultView.Event("reset", { bubbles: true }));
```
