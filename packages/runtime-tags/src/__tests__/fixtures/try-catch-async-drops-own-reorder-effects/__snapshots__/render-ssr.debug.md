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
  [a][z]
</div>
ERROR!
```
## Change
```
INSERT: ::text("ERROR!")
INSERT: #log::text("[a]")
REMOVE: #log::text("[a]")
INSERT: #log::text("[a][z]")
```
