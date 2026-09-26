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
INSERT: ::text + p
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
INSERT: div::text("b")
REMOVE: ::text("loading")
INSERT: span, div
```
## Console
```
LOG "connected true"
```
