# Render
```html
<span>
  x
</span>
```

# Update
```html
<span>
  y
</span>
caught ERROR!
```
## Change
```
INSERT: span + ::text("caught ERROR!")
REMOVE: span::text("x")
INSERT: span::text("y")
```
