# Render

# Update
```html
loading body
```
## Change
```
INSERT: ::text("loading "), ::text("body")
```

# Update
```html
done
```
## Change
```
INSERT: ::text("done")
REMOVE: ::text + ::text("loading ")
REMOVE: ::text + ::text("body")
```
