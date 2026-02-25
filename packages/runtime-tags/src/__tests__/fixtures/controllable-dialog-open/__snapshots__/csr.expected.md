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
dialog.open = !dialog.open;
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

# Render
```js
const dialog = container.querySelector("dialog");
dialog.open = !dialog.open;
```
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
UPDATE dialog[open] null => ""
UPDATE dialog[open] "" => ""
UPDATE dialog[open] null => ""
UPDATE span/#text "false" => "true"
```

# Render
```js
const dialog = container.querySelector("dialog");
dialog.open = !dialog.open;
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