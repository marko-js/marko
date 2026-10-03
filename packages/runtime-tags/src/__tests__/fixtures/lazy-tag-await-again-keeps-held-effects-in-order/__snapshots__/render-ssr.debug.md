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
  [a][b][c]
</div>
```
## Change
```
INSERT: #log::text("[a]")
REMOVE: #log::text("[a]")
INSERT: #log::text("[a][b]")
REMOVE: #log::text("[a][b]")
INSERT: #log::text("[a][b][c]")
```
