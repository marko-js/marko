# Render
```html
012345
```

# Update
```html
012345
```
## Change
```
INSERT: ::text("0")
REMOVE: ::text@0 + ::text("0")
UPDATE: ::text@0 " " => "0"
INSERT: ::text@0 + ::text("1")
REMOVE: ::text@1 + ::text("1")
UPDATE: ::text@1 " " => "1"
INSERT: ::text@1 + ::text("2")
REMOVE: ::text@2 + ::text("2")
UPDATE: ::text@2 " " => "2"
INSERT: ::text@2 + ::text("3")
REMOVE: ::text@3 + ::text("3")
UPDATE: ::text@3 " " => "3"
INSERT: ::text@3 + ::text("4")
REMOVE: ::text@4 + ::text("4")
UPDATE: ::text@4 " " => "4"
INSERT: ::text@4 + ::text("5")
REMOVE: ::text@5 + ::text("5")
UPDATE: ::text@5 " " => "5"
```
