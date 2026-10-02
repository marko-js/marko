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
INSERT: ::text("caught "), ::text("ERROR!")
REMOVE: ::text@7 + span
UPDATE: ::text@7 "" => "ERROR!"
```
