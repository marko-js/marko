# Render

# Update
```html
caught inner placeholder
```
## Change
```
INSERT: ::text("outer loading")
REMOVE: ::text("outer loading")
INSERT: ::text("caught "), ::text("inner placeholder")
UPDATE: ::text@7 "" => "inner placeholder"
```
