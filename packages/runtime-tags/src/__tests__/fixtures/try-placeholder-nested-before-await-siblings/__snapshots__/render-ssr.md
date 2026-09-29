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
INSERT: div::text("b")
REMOVE: ::text("b loading")
INSERT: ::text@0 + :is(::text("b inner loading"), div)
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
INSERT: div:nth-of-type(1)::text("a")
REMOVE: ::text("a loading")
INSERT: span, div
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
INSERT: span:nth-of-type(2)::text("b inner")
REMOVE: ::text("b inner loading")
INSERT: div:nth-of-type(1) + span
```
