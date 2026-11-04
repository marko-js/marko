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
  [a][p][r][q]
</div>
```
## Change
```
INSERT: #log::text("[a]")
REMOVE: #log::text("[a]")
INSERT: #log::text("[a][p]")
REMOVE: #log::text("[a][p]")
INSERT: #log::text("[a][p][r]")
REMOVE: #log::text("[a][p][r]")
INSERT: #log::text("[a][p][r][q]")
```
