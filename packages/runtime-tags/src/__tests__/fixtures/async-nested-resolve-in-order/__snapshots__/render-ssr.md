# Render
```html
a
```

# Update
```html
ab
```
## Change
```
INSERT: ::text@0 + ::text("b")
```

# Update
```html
abc
```
## Change
```
INSERT: ::text@1 + ::text("c")
```

# Update
```html
abcdefghijklm
```
## Change
```
INSERT: ::text@2 + ::text("de")
INSERT: ::text@3 + ::text("f")
INSERT: ::text@5 + ::text("g")
INSERT: ::text@6 + ::text("h")
INSERT: ::text@7 + ::text("ijk")
INSERT: ::text@8 + ::text("l")
INSERT: ::text@11 + ::text("m")
```
