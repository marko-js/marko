# Render

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
INSERT: div::text("Resolved A: A Value")
INSERT: div + ::text("Rejected B")
```
