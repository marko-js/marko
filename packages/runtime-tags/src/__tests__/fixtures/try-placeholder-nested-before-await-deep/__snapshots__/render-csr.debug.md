# Render

# Update
```html
1 loading
```
## Change
```
INSERT: ::text("1 loading")
```

# Update
```html
2 loading
<div>
  1
</div>
```
## Change
```
REMOVE: ::text("1 loading")
INSERT: ::text("2 loading"), div
```

# Update
```html
<span>
  3
</span>
<b>
  2
</b>
<div>
  1
</div>
```
## Change
```
REMOVE: ::text("2 loading")
INSERT: span, b
```
