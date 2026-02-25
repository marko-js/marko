# Render
```html
<dialog
  open=""
/>
<span>
  true
</span>
```


# Render
```js
const dialog = container.querySelector("dialog");
dialog.open = false;
dialog.dispatchEvent(new dialog.ownerDocument.defaultView.Event("close"));
```
```html
<dialog />
<span>
  false
</span>
```
