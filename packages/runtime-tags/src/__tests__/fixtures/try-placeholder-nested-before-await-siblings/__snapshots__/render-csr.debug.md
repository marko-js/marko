# Render

# Update
```html
a loadingb loading
```
## Change
```
INSERT: ::text("a loading")
INSERT: ::text("b loading")
```

# Update
```html
a loadingb inner loading
<div>
  b
</div>
```
## Change
```
REMOVE: ::text("b loading")
INSERT: ::text("b inner loading"), div
```

# Update
```html
<span>
  a inner
</span>
<div>
  a
</div>
b inner loading
<div>
  b
</div>
```
## Change
```
REMOVE: ::text("a loading")
INSERT: span, div:nth-of-type(1)
```

# Update
```html
<span>
  a inner
</span>
<div>
  a
</div>
<span>
  b inner
</span>
<div>
  b
</div>
```
## Change
```
REMOVE: ::text("b inner loading")
INSERT: span:nth-of-type(2)
```
