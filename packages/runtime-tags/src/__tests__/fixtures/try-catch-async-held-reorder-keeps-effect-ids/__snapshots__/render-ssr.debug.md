# Render
```html
<div
  id="log"
/>
loading
```

# Update
```html
<div
  id="log"
/>
```
## Change
```
REMOVE: ::text("loading")
```

# Update
```html
<div
  id="log"
>
  [a][r][q]
</div>
```
## Change
```
INSERT: #log::text("[a]")
REMOVE: #log::text("[a]")
INSERT: #log::text("[a][r]")
REMOVE: #log::text("[a][r]")
INSERT: #log::text("[a][r][q]")
```
