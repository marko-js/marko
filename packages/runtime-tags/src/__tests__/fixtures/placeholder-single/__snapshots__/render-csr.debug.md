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
INSERT: ::text@0 + ::text("_A_")
REMOVE: ::text@1 + ::text("b")
REMOVE: ::text@1 + ::text("d")
```

# Update
```html
a_A_efg
```
## Change
```
INSERT: ::text@4 + ::text("f")
UPDATE: ::text@5 " " => "f"
```

# Update
```html
abcdefg
```
## Change
```
INSERT: ::text@0 + :is(::text("b"), ::text("c"), ::text("d"))
REMOVE: ::text@3 + ::text("_A_")
```
