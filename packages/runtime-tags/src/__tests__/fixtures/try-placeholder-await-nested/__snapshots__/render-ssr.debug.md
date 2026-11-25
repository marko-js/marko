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
REMOVE: ::text("loading...")
INSERT: p:nth-of-type(1), p:nth-of-type(2)
INSERT: p:nth-of-type(1)::text("outer")
INSERT: p:nth-of-type(2)::text("inner")
```
