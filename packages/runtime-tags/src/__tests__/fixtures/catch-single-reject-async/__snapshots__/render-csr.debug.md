# Render
```html
abcdf
```

# Update
```html
abcdef
```
## Change
```
INSERT: ::text@3 + ::text("e")
UPDATE: ::text@4 " " => "e"
```

# Update
```html
aERROR!def
```
## Change
```
INSERT: ::text@0 + ::text("ERROR!")
REMOVE: ::text@1 + ::text("b")
REMOVE: ::text@1 + ::text("c")
UPDATE: ::text@1 " " => "ERROR!"
```
