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
caught: ERROR!
<div>
  changes: 0
</div>
```
## Change
```
INSERT: ::text("caught: "), ::text("ERROR!"), div
REMOVE: div + ::text("loading outer...")
```

# Update
```js
const div = document.querySelector("div");
if (!div) return;
const window = div.ownerDocument.defaultView;
div.dispatchEvent(new window.Event("change", { bubbles: true }));
```
```html
caught: ERROR!
<div>
  changes: 1
</div>
```
## Change
```
UPDATE: div::text@9 "0" => "1"
```
