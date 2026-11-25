# Render

# Update
```html
loading outer
```
## Change
```
INSERT: ::text("loading outer")
```

# Update
```html
outercaught ERROR!
```
## Change
```
REMOVE: ::text("loading outer")
INSERT: ::text("outer")
INSERT: ::text("caught "), ::text("ERROR!")
UPDATE: ::text@12 "" => "ERROR!"
```

# Update
```html
outerloading innercaught ERROR!
```
## Change
```
INSERT: ::text("loading inner")
```

# Update
```html
outerinnercaught ERROR!
```
## Change
```
REMOVE: ::text("loading inner")
INSERT: ::text("inner")
```
