# Render

# Update
```html
loading...
```
## Change
```
INSERT: ::text("loading...")
```

# Update
```html
<div>
  1 1
</div>
```
## Change
```
INSERT: div
REMOVE: div + ::text("loading...")
UPDATE: div::text@2 "" => "1"
UPDATE: div::text@0 "" => "1"
```
