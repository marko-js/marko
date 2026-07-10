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
## Change
```
REMOVE: ::text("loading outer...")
```

# Update
```html
loading inner...
```
## Change
```
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
INSERT: div
REMOVE: div + ::text("loading inner...")
UPDATE: div::text@9 "" => "0"
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
