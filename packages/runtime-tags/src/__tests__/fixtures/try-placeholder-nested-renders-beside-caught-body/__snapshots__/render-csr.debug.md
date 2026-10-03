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
INSERT:  + :is(::text("caught "), ::text("ERROR!"))
UPDATE: ::text@12 "" => "ERROR!"
INSERT: ::text("outer")
REMOVE: ::text@0 + ::text("loading outer")
```

# Update
```html
outerloading innercaught ERROR!
```
## Change
```
INSERT: ::text@0 + ::text("loading inner")
```

# Update
```html
outerinnercaught ERROR!
```
## Change
```
INSERT: ::text@0 + ::text("inner")
REMOVE: ::text@5 + ::text("loading inner")
```
