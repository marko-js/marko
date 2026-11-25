# Render
```html
outer loading
```

# Update
```html
outer loading
```
## Change
```
INSERT: t > span::text("inner")
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
INSERT: div::text("outer")
```
