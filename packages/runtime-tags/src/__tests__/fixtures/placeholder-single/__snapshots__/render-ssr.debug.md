# Render
```html
a_A_e
```

# Update
```html
a_A_efg
```
## Change
```
INSERT: ::text@4 + ::text("fg")
```

# Update
```html
abcdefg
```
## Change
```
REMOVE: ::text("_A_")
INSERT: ::text@0 + :is(::text("b"), ::text("c"), ::text("d"))
```
