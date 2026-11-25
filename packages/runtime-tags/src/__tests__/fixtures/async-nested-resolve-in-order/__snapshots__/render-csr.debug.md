# Render
```html
agm
```

# Update
```html
abfghlm
```
## Change
```
INSERT: ::text("b"), ::text("f")
UPDATE: ::text@1 "" => "b"
INSERT: ::text("h"), ::text("l")
UPDATE: ::text@4 "" => "h"
```

# Update
```html
abcefghiklm
```
## Change
```
INSERT: ::text("c"), ::text("e")
UPDATE: ::text@2 "" => "c"
INSERT: ::text("i"), ::text("k")
UPDATE: ::text@7 "" => "i"
```

# Update
```html
abcdefghijklm
```
## Change
```
INSERT: ::text("d")
UPDATE: ::text@3 " " => "d"
INSERT: ::text("j")
UPDATE: ::text@9 " " => "j"
```
