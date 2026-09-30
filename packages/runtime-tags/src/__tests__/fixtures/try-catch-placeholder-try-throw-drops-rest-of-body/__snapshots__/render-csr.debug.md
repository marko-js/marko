# Render

# Update
```html
caught ERROR!
```
## Change
```
INSERT: p
INSERT: ::text(" ")
INSERT: ::text("caught "), ::text("ERROR!")
REMOVE: ::text@7 + ::text(" ")
REMOVE: ::text@7 + p
UPDATE: ::text@7 "" => "ERROR!"
```

# Update
```html
caught ERROR!
<p>
  d
</p>
```
## Change
```
INSERT: ::text@7 + p
UPDATE: p::text " " => "d"
```
