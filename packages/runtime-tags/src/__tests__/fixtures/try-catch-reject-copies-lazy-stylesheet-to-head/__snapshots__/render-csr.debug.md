# Render

# Update
```html
<span
  class="child"
>
  body
</span>
```
## Change
```
INSERT: .child
```

# Update
```html
caught ERROR!
```
## Change
```
REMOVE: span
INSERT: ::text("caught "), ::text("ERROR!")
UPDATE: ::text@7 "" => "ERROR!"
```
