# Render
```html
<dialog
  open=""
/>
<span>
  true
</span>
```

# Mutations
```
INSERT dialog, span
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

# Mutations
```
UPDATE dialog[open] "" => null
UPDATE dialog[open] null => null
UPDATE dialog[open] "" => null
UPDATE span/#text "true" => "false"
```