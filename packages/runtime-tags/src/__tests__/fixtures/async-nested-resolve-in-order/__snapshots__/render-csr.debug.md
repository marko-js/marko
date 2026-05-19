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
UPDATE: ::text@1 "" => "b"
INSERT: ::text@3 + :is(::text("h"), ::text("l"))
UPDATE: ::text@4 "" => "h"
```

# Update
```html
abcefghiklm
```
## Change
```
INSERT: ::text@1 + :is(::text("c"), ::text("e"))
UPDATE: ::text@2 "" => "c"
INSERT: ::text@6 + :is(::text("i"), ::text("k"))
UPDATE: ::text@7 "" => "i"
```

# Update
```html
abcdefghijklm
```
## Change
```
INSERT: ::text@2 + ::text("d")
UPDATE: ::text@3 " " => "d"
INSERT: ::text@8 + ::text("j")
UPDATE: ::text@9 " " => "j"
```
