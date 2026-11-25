# Render

# Update
```html
loading
```
## Change
```
INSERT: ::text("loading")
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
UPDATE: p::text " " => "c"
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
```
## Console
```
LOG "connected true"
```
