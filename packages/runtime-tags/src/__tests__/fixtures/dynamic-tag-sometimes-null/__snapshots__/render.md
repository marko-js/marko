# Render
```html
Body Content
<button />
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  Body Content
</div>
<button />
```
## Change
```
INSERT: div
REMOVE: div + ::text("Body Content")
INSERT: div::text("Body Content")
```

# Update
```js
container.querySelector("button").click();
```
```html
Body Content
<button />
```
## Change
```
INSERT: ::text("Body Content")
REMOVE: ::text + div
```
