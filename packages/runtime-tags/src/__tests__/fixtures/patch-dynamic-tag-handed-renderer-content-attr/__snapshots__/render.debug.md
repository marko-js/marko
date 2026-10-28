# Render `{"x":1,"y":"y"}`
```html
Ay
```

# Update `{"x":2,"y":"y"}`
## Change
```
REMOVE: ::text("A")
REMOVE: ::text("y")
```

# Update `{"x":1,"y":"z"}`
```html
Az
```
## Change
```
INSERT: ::text("A"), ::text("z")
```
