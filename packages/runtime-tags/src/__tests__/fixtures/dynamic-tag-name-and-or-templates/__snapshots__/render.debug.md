# Render
```html
<button>
  toggle
</button>
<div>
  compact row Hello
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div>
  full row
</div>
```
## Change
```
INSERT: button + div
REMOVE: div + div
UPDATE: div::text@5 "" => "row"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div>
  compact row Hello
</div>
```
## Change
```
INSERT: button + div
REMOVE: div + div
UPDATE: div::text@8 "" => "row"
INSERT: div::text@11 + ::text("Hello")
```
