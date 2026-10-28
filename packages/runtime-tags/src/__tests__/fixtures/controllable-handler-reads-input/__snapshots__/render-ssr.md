# Render `{"label":"a"}`
```html
<p>
  a
</p>
<input
  value="a"
/>
<button>
  0
</button>
```

# Update
```js
const el = document.querySelector("input");
el.value = "x";
el.dispatchEvent(new document.defaultView.Event("input", { bubbles: true }));
```
## Console
```
LOG "x:a"
```
