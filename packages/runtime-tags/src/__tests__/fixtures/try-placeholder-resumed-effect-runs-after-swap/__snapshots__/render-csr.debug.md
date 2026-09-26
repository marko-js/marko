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
INSERT: ::text + p
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
INSERT: span, div
REMOVE: div + ::text("loading")
```
## Console
```
LOG "connected true"
```
