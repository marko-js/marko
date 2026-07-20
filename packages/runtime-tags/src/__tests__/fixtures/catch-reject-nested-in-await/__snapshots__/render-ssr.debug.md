# Render
```html
loading outer...
```

# Update
```html
loading outer...
```
## Change
```
INSERT: t > div::text("changes: ")
INSERT: t > div::text@0 + ::text("0")
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
REMOVE: ::text("loading outer...")
INSERT: div
INSERT: ::text("caught: ERROR!")
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
