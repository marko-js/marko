# Render

# Update
```html
outer loading
```
## Change
```
INSERT: ::text("outer loading")
```

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
UPDATE: p::text " " => "a"
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
```
