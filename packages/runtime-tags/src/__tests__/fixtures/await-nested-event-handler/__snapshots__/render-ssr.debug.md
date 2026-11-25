# Render
```html
loading outer...
```

# Update
```html
loading inner...
```
## Change
```
REMOVE: ::text("loading outer...")
INSERT: ::text("loading inner...")
```

# Update
```html
<div>
  changes: 0
</div>
```
## Change
```
REMOVE: ::text("loading inner...")
INSERT: div
INSERT: div::text("changes: ")
INSERT: div::text("0")
```

# Update
```js
const div = document.querySelector("div");
const window = div.ownerDocument.defaultView;
div.dispatchEvent(new window.Event("change", { bubbles: true }));
```
```html
<div>
  changes: 1
</div>
```
## Change
```
UPDATE: div::text@9 "0" => "1"
```
