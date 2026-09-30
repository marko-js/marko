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

# Update
```html
caught ERROR!
```
## Change
```
INSERT: ::text("caught ERROR!")
REMOVE: #class + div
REMOVE: #class
```

# Update
```html
caught ERROR!done
```
## Change
```
INSERT: ::text@0 + ::text("done")
```
