# Render
```html
<p>
  after
</p>
```

# Update
```html
caught ERROR!
<p>
  after
</p>
```
## Change
```
INSERT: ::text("caught "), ::text("ERROR!")
UPDATE: ::text@7 "" => "ERROR!"
```

# Update
```html
caught ERROR!d
<p>
  after
</p>
```
## Change
```
INSERT: ::text@7 + ::text("d")
UPDATE: ::text@13 " " => "d"
```
