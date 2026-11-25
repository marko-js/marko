# Render
```html
abdeg
```

# Update
```html
a_A_eg
```
## Change
```
REMOVE: ::text("b")
REMOVE: ::text("d")
INSERT: ::text("_A_")
```

# Update
```html
a_A_efg
```
## Change
```
INSERT: ::text("f")
UPDATE: ::text@5 " " => "f"
```

# Update
```html
abcdefg
```
## Change
```
REMOVE: ::text("_A_")
INSERT: ::text("b"), ::text("c"), ::text("d")
```
