# Render

# Update
```html
a loadingb loading
```
## Change
```
INSERT: ::text("a loading")
INSERT: ::text@0 + ::text("b loading")
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
INSERT: ::text@0 + :is(::text("b inner loading"), div)
REMOVE: div + ::text("b loading")
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
INSERT: span, div
REMOVE: div:nth-of-type(1) + ::text("a loading")
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
INSERT: div:nth-of-type(1) + span
REMOVE: span:nth-of-type(2) + ::text("b inner loading")
```
