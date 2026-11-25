# Render

# Update
```html
outer loading
```
## Change
```
INSERT: ::text("outer loading")
```

# Update
```html
<span>
  inner
</span>
<div>
  outer
</div>
```
## Change
```
REMOVE: ::text("outer loading")
INSERT: span, div
```
