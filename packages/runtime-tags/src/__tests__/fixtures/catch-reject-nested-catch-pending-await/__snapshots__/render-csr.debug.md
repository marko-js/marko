# Render

# Update
```html
loading outer...
```
## Change
```
INSERT: ::text("loading outer...")
```

# Update
```html
<div>
  changes: 0
</div>
```
## Change
```
INSERT: div
REMOVE: div + ::text("loading outer...")
UPDATE: div::text@9 "" => "0"
```

# Update
```html
loading outer...
```
## Change
```
INSERT: ::text("loading outer...")
REMOVE: ::text + div
```

# Update
```js
const div = document.querySelector("div");
if (!div) return;
const window = div.ownerDocument.defaultView;
div.dispatchEvent(new window.Event("change", {
  bubbles: true
}));
```
