# Render `{"p1":0}`
```html
same
```
## Console
```
LOG 0
```

# Update
```html
different
```
## Change
```
INSERT: ::text("different")
REMOVE: ::text + ::text("same")
```
