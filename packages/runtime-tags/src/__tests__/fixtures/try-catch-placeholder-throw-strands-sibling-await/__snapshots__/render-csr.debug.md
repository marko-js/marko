# Render

# Update
```html
loading
```
## Change
```
INSERT: ::text("loading")
```

# Update
```html
caught ERROR!
```
## Change
```
INSERT: ::text("caught "), ::text("ERROR!")
REMOVE: ::text@7 + ::text("loading")
```
