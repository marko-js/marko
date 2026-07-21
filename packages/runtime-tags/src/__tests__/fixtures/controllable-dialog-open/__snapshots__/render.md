# Render
```html
<dialog
  open=""
/>
<span>
  true
</span>
```

# Update
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
## Change
```
UPDATE: dialog[open] "" => null
UPDATE: dialog[open] null => null
UPDATE: span::text "true" => "false"
UPDATE: dialog[open] "" => null
```

# Update
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
## Change
```
UPDATE: dialog[open] null => ""
UPDATE: dialog[open] "" => ""
UPDATE: span::text "false" => "true"
UPDATE: dialog[open] null => ""
```

# Update
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
## Change
```
UPDATE: dialog[open] "" => null
UPDATE: dialog[open] null => null
UPDATE: span::text "true" => "false"
UPDATE: dialog[open] "" => null
```
