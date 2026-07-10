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
<div>
  changes: 0
</div>
```
## Change
```
INSERT: div
REMOVE: div + ::text("loading outer...")
UPDATE: div::text@9 "" => "0"
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
INSERT: ::text("caught: "), ::text("ERROR!")
UPDATE: ::text@8 "" => "ERROR!"
```
