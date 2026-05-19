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
<span>
  1
</span>
```
## Change
```
INSERT: span
REMOVE: span + ::text("loading...")
UPDATE: span::text " " => "1"
```
