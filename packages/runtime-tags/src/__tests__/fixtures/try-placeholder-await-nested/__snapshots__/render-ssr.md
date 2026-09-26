# Render
```html
loading...
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
INSERT: p:nth-of-type(1)::text("outer")
INSERT: p:nth-of-type(2)::text("inner")
REMOVE: ::text("loading...")
INSERT: p, p
```
