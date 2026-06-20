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
div.dispatchEvent(new container.ownerDocument.defaultView.MouseEvent("mouseover", {
  bubbles: true
}));
```
