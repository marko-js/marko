# Render
```html
<div>
  2 3
</div>
```

# Update
```html
<div>
  2 3
</div>
loading...
```
## Change
```
INSERT: div + ::text("loading...")
```

# Update
```html
<div>
  2 3
</div>
<div>
  1 1
</div>
```
## Change
```
INSERT: div:nth-of-type(1) + div
REMOVE: div:nth-of-type(2) + ::text("loading...")
UPDATE: div:nth-of-type(2)::text@2 "" => "1"
UPDATE: div:nth-of-type(2)::text@0 "" => "1"
```
