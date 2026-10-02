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
<p>
  a
</p>
```
## Change
```
INSERT: p
REMOVE: p + ::text("loading")
```
## Console
```
LOG "caught body effect"
```

# Update
```html
caught ERROR!
```
## Change
```
INSERT: ::text("caught "), ::text("ERROR!")
REMOVE: ::text@7 + p
UPDATE: ::text@7 "" => "ERROR!"
```

# Update
```html
caught ERROR!done
```
## Change
```
INSERT: ::text@7 + ::text("done")
UPDATE: ::text@13 " " => "done"
```
