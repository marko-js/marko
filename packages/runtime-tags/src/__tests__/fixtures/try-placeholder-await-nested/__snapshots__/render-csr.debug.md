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
REMOVE: ::text("loading...")
INSERT: p:nth-of-type(1), p:nth-of-type(2)
```
