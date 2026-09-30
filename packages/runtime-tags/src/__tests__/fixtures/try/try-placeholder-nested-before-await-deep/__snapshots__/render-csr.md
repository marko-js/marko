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
INSERT: ::text("2 loading"), div
REMOVE: div + ::text("1 loading")
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
INSERT: span, b
REMOVE: b + ::text("2 loading")
```
