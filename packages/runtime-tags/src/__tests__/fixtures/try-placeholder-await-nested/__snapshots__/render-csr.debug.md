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
  outer
</p>
<p>
  inner
</p>
```
## Change
```
INSERT: p, p
REMOVE: p:nth-of-type(2) + ::text("loading...")
```
