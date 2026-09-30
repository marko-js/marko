# Render

# Update
```html
caught inner placeholder
```
## Change
```
INSERT: ::text("outer loading")
INSERT: ::text("caught "), ::text("inner placeholder")
REMOVE: ::text@7 + ::text("outer loading")
UPDATE: ::text@7 "" => "inner placeholder"
```
