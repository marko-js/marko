# Render
```html
<button
  id="clear"
>
  clear
</button>
<div />
<div>
  <span>
    first
  </span>
</div>
<div>
  <span>
    second
  </span>
</div>
```

# Update
```js
document.querySelector("button#clear").click();
```
```html
<button
  id="clear"
>
  clear
</button>
<div>
  destroyed firstdestroyed second
</div>
```
## Change
```
REMOVE: div + div
REMOVE: div + div
INSERT: div::text("destroyed first")
INSERT: div::text@0 + ::text("destroyed second")
```
