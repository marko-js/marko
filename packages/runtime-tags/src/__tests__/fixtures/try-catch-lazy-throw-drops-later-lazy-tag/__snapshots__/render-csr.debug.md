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
