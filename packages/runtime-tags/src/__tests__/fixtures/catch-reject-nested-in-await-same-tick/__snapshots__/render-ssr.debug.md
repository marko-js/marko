# Render
```html
loading outer...
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
INSERT: div::text("changes: ")
INSERT: div::text@0 + ::text("0")
REMOVE: ::text("loading outer...")
INSERT: div
INSERT: ::text("caught: ERROR!")
```
