# Render
```html
<div
  id="class"
>
  class
</div>
<div>
  grandchild
</div>
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
REMOVE: ::text@7 + #class
REMOVE: ::text@7 + div
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
