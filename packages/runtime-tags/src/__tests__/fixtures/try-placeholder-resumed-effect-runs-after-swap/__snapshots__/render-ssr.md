# Render
```html
loading
```

# Update
```html
loading
```
## Change
```
INSERT: t > span::text("a")
```

# Update
```html
loading
<p>
  c
</p>
```
## Change
```
INSERT: p
INSERT: p::text("c")
```

# Update
```html
<span>
  a
</span>
<div>
  b
</div>
<p>
  c
</p>
```
## Change
```
REMOVE: ::text("loading")
INSERT: span, div
INSERT: div::text("b")
```
## Console
```
LOG "connected true"
```
