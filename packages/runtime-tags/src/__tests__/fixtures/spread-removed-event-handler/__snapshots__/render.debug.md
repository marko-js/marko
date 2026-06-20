# Render
```html
<div>
  0:
</div>
```

# Update
```js
container.querySelector("div").click();
```
```html
<div>
  1:
</div>
```
## Change
```
UPDATE: div::text@0 "0" => "1"
```

# Update
```js
const div = container.querySelector("div");
const win = container.ownerDocument.defaultView;
div.dispatchEvent(new win.MouseEvent("mouseover", {
  bubbles: true
}));
```

# Update
```js
container.querySelector("div").click();
```
```html
<div>
  0:
</div>
```
## Change
```
UPDATE: div::text@0 "1" => "0"
```

# Update
```js
const div = container.querySelector("div");
const win = container.ownerDocument.defaultView;
div.dispatchEvent(new win.MouseEvent("mouseover", {
  bubbles: true
}));
```
```html
<div>
  0:M
</div>
```
## Change
```
UPDATE: div::text@2 "" => "M"
```
