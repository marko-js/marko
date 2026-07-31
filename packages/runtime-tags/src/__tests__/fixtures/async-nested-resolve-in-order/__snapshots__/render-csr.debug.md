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
INSERT: ::text@0 + :is(::text("b"), ::text("f"))
INSERT: ::text@3 + :is(::text("h"), ::text("l"))
UPDATE: ::text@1 "" => "b"
UPDATE: ::text@4 "" => "h"
```

# Update
```html
abcefghiklm
```
## Change
```
INSERT: ::text@1 + :is(::text("c"), ::text("e"))
INSERT: ::text@6 + :is(::text("i"), ::text("k"))
UPDATE: ::text@2 "" => "c"
UPDATE: ::text@7 "" => "i"
```

# Update
```html
abcdefghijklm
```
## Change
```
INSERT: ::text@2 + ::text("d")
INSERT: ::text@8 + ::text("j")
UPDATE: ::text@3 " " => "d"
UPDATE: ::text@9 " " => "j"
```
