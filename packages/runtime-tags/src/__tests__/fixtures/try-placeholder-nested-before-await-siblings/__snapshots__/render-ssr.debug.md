# Render
```html
a loadingb loading
```

# Update
```html
a loadingb loading
```
## Change
```
INSERT: t > span::text("a inner")
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
INSERT: div::text("b")
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
INSERT: div:nth-of-type(1)::text("a")
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
INSERT: span:nth-of-type(2)::text("b inner")
```
