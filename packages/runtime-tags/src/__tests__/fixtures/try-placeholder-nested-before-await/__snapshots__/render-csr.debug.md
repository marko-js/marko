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
INSERT: span, div
REMOVE: div + ::text("outer loading")
```
