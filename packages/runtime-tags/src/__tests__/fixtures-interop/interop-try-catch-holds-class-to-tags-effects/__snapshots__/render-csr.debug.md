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
REMOVE: #class
REMOVE: div
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
