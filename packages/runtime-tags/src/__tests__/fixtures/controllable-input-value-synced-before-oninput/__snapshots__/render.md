# Render
```html
<input
  class="first"
/>
<input
  class="ctrl"
/>
```

# Update
```js
const input = document.querySelector("input.ctrl");
input.value = "x";
input.dispatchEvent(
  new document.defaultView.Event("input", { bubbles: true }),
);
```
## Console
```
LOG "q=x"
```
