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
REMOVE: div
INSERT: div
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
REMOVE: div
INSERT: div
UPDATE: div::text@8 "" => "row"
INSERT: div::text("Hello")
```
