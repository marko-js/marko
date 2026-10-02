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
acaught ERROR!
```
## Change
```
INSERT: span + ::text("a")
INSERT: ::text@0 + ::text("caught ERROR!")
REMOVE: span::text("x")
INSERT: span::text("y")
```
