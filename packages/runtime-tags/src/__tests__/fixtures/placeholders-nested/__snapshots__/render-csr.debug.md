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
REMOVE: ::text("b")
REMOVE: ::text("d")
REMOVE: ::text("e")
REMOVE: ::text("g")
INSERT: ::text("_B_")
```

# Update
```html
a_B_hij
```
## Change
```
INSERT: ::text("i")
UPDATE: ::text@5 " " => "i"
```

# Update
```html
abcd_A_hij
```
## Change
```
REMOVE: ::text("_B_")
INSERT: ::text("b"), ::text("c"), ::text("d"), ::text("_A_")
```

# Update
```html
abcdefghij
```
## Change
```
REMOVE: ::text("_A_")
INSERT: ::text("e"), ::text("f"), ::text("g")
```
