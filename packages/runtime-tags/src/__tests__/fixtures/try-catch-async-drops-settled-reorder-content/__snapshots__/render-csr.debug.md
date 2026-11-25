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
REMOVE: ::text("loading")
INSERT: p
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
REMOVE: p
INSERT: ::text("caught "), ::text("ERROR!")
UPDATE: ::text@7 "" => "ERROR!"
```

# Update
```html
caught ERROR!done
```
## Change
```
INSERT: ::text("done")
UPDATE: ::text@13 " " => "done"
```
