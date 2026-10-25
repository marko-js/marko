# Render
```html
<div
  id="log"
/>
```

# Update
```html
<div
  id="log"
>
  [a]
</div>
```
## Change
```
INSERT: #log::text("[a]")
```

# Update
```html
<div
  id="log"
>
  [a][b]
</div>
```
## Change
```
REMOVE: #log::text("[a]")
INSERT: #log::text("[a][b]")
```

# Update
```html
<div
  id="log"
>
  [a][b][c]
</div>
```
## Change
```
REMOVE: #log::text("[a][b]")
INSERT: #log::text("[a][b][c]")
```
