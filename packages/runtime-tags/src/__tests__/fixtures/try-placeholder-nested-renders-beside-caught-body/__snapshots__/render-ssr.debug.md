# Render
```html
loading outer
```

# Update
```html
outerloading innercaught ERROR!
```
## Change
```
REMOVE: ::text("loading outer")
INSERT: ::text("outer"), ::text("loading inner")
INSERT: ::text@5 + ::text("caught ERROR!")
```

# Update
```html
outerinnercaught ERROR!
```
## Change
```
REMOVE: ::text("loading inner")
INSERT: ::text@0 + ::text("inner")
```
