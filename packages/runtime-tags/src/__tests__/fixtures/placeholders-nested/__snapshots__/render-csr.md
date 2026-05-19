# Render
```html
abdeghj
```

# Update
```html
a_B_hj
```
## Change
```
INSERT: ::text@0 + ::text("_B_")
REMOVE: ::text@1 + ::text("b")
REMOVE: ::text@1 + ::text("d")
REMOVE: ::text@1 + ::text("e")
REMOVE: ::text@1 + ::text("g")
```

# Update
```html
a_B_hij
```
## Change
```
INSERT: ::text@4 + ::text("i")
UPDATE: ::text@5 " " => "i"
```

# Update
```html
abcd_A_hij
```
## Change
```
INSERT: ::text@0 + :is(::text("b"), ::text("c"), ::text("d"), ::text("_A_"))
REMOVE: ::text@4 + ::text("_B_")
```

# Update
```html
abcdefghij
```
## Change
```
INSERT: ::text@3 + :is(::text("e"), ::text("f"), ::text("g"))
REMOVE: ::text@6 + ::text("_A_")
```
