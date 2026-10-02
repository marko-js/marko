# Render

# Update
```html
caught ERROR!
```
## Change
```
INSERT: ::text("caught "), ::text("ERROR!")
UPDATE: ::text@7 "" => "ERROR!"
```

# Update
```html
acaught ERROR!
```
## Change
```
INSERT: ::text("a")
UPDATE: ::text@0 " " => "a"
```
