# Render

# Update
```html
caught placeholder
```
## Change
```
INSERT: ::text("loading ")
INSERT: ::text("caught "), ::text("placeholder")
REMOVE: ::text@7 + ::text("loading ")
UPDATE: ::text@7 "" => "placeholder"
```
