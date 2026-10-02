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
INSERT: ::text("caught ERROR!")
REMOVE: ::text("loading outer")
INSERT: ::text("outer"), ::text("loading inner")
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
