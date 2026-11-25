# Render

# Update
```html
caught ERROR!
```
## Change
```
INSERT: ::text(" "), p
REMOVE: ::text(" ")
REMOVE: p
INSERT: ::text("caught "), ::text("ERROR!")
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
INSERT: p
UPDATE: p::text " " => "d"
```
