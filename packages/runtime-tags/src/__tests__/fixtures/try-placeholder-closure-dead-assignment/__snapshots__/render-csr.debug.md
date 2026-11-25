# Render
```html
<div>
  2 3
</div>
```

# Update
```html
<div>
  2 3
</div>
loading...
```
## Change
```
INSERT: ::text("loading...")
```

# Update
```html
<div>
  2 3
</div>
<div>
  1 1
</div>
```
## Change
```
REMOVE: ::text("loading...")
INSERT: div:nth-of-type(2)
```
