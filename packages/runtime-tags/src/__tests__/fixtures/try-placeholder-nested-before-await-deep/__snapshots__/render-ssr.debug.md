# Render
```html
1 loading
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
INSERT: div::text("1")
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
INSERT: t > span::text("3")
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
INSERT: b::text("2")
```
