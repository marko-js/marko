# Render
```html
<div
  id="class"
>
  <button>
    0
  </button>
</div>
```
## Console
```
LOG "child effect"
```

# Update
```html
caught ERROR!
```
## Change
```
INSERT: ::text("caught "), ::text("ERROR!")
REMOVE: ::text@7 + #class
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
