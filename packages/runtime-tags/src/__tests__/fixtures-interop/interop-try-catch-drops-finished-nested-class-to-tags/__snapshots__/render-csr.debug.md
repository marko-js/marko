# Render
```html
<div
  id="class"
>
  <div
    id="inner"
  >
    <button>
      0
    </button>
  </div>
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
REMOVE: #class
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
