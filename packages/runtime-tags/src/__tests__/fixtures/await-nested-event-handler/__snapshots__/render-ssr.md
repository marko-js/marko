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
INSERT: div::text("changes: ")
INSERT: div::text@0 + ::text("0")
REMOVE: ::text("loading inner...")
INSERT: div
```

# Update
```js
const div = container.querySelector("div");
const window = div.ownerDocument.defaultView;
div.dispatchEvent(new window.Event("change", {
  bubbles: true
}));
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
