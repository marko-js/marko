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
