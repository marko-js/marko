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
UPDATE: dialog[open] "" => null
UPDATE: span::text "true" => "false"
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
UPDATE: dialog[open] null => ""
UPDATE: span::text "false" => "true"
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
UPDATE: dialog[open] "" => null
UPDATE: span::text "true" => "false"
```
