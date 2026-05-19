# Render

# Update
```html
Rejected B
```
## Change
```
INSERT: ::text("Rejected B")
```

# Update
```html
<div>
  Resolved A: A Value
</div>
Rejected B
```
## Change
```
INSERT: div
UPDATE: div::text@12 "" => "A Value"
```
