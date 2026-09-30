# Render
```html
<div>
  2 3
</div>
loading...
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
INSERT: div:nth-of-type(2)::text("1 1")
REMOVE: ::text("loading...")
INSERT: div:nth-of-type(1) + div
```
