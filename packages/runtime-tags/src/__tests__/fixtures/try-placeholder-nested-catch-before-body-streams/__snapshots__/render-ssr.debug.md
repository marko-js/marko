# Render

# Update
```html
<p>
  a
</p>
outer loading
```
## Change
```
INSERT: p
INSERT: p::text("a")
INSERT: p + ::text("outer loading")
```

# Update
```html
<p>
  a
</p>
caught
<div>
  outer
</div>
```
## Change
```
INSERT: div::text("outer")
REMOVE: ::text("outer loading")
INSERT: p + :is(::text("caught"), div)
```
