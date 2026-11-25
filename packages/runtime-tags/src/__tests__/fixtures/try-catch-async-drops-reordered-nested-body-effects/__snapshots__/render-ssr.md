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
caught ERROR!
```
## Change
```
REMOVE: ::text("loading")
INSERT: ::text("caught ERROR!")
```

# Update
```html
<div
  id="log"
>
  [reordered]
</div>
caught ERROR!done
```
## Change
```
INSERT: #log::text("[reordered]")
INSERT: ::text("done")
```
