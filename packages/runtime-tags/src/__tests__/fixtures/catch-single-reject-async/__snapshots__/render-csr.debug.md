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
INSERT: ::text("e")
UPDATE: ::text@4 " " => "e"
```

# Update
```html
aERROR!def
```
## Change
```
REMOVE: ::text("b")
REMOVE: ::text("c")
INSERT: ::text("ERROR!")
UPDATE: ::text@1 " " => "ERROR!"
```
