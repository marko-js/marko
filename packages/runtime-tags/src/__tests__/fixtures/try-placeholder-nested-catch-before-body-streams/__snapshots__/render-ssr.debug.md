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
INSERT: ::text("outer loading")
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
REMOVE: ::text("outer loading")
INSERT: ::text("caught"), div
INSERT: div::text("outer")
```
