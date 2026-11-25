# Render `{"p1":false,"p2":0}`

# Update `{"p1":false,"p2":6}`
```html
66666
```
## Change
```
INSERT: ::text("6")
UPDATE: ::text@0 " " => "6"
INSERT: ::text("6")
UPDATE: ::text@1 " " => "6"
INSERT: ::text("6")
UPDATE: ::text@2 " " => "6"
INSERT: ::text("6")
UPDATE: ::text@3 " " => "6"
INSERT: ::text("6")
UPDATE: ::text@4 " " => "6"
```

# Update `{"p1":false,"p2":0}`
## Change
```
REMOVE: ::text("6")
REMOVE: ::text("6")
REMOVE: ::text("6")
REMOVE: ::text("6")
REMOVE: ::text("6")
```
