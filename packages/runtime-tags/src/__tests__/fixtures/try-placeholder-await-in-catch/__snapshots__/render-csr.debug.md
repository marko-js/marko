# Render

# Update
```html
loading...
```
## Change
```
INSERT: ::text("loading...")
```

# Update
```html
<p>
  caught ERROR!, retried
</p>
```
## Change
```
INSERT: p
REMOVE: p + ::text("loading...")
```
