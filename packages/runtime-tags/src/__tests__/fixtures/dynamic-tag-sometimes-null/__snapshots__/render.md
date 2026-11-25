# Render
```html
Body Content
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  Body Content
</div>
<button />
```
## Change
```
REMOVE: ::text("Body Content")
INSERT: div
```

# Update
```js
document.querySelector("button").click();
```
```html
Body Content
<button />
```
## Change
```
REMOVE: div
INSERT: ::text("Body Content")
```
