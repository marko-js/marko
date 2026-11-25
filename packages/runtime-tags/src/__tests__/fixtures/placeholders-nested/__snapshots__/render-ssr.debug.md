# Render
```html
a_B_h
```

# Update
```html
a_B_hij
```
## Change
```
INSERT: ::text("ij")
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
