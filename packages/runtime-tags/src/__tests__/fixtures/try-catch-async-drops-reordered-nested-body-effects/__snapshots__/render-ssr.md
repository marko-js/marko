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
INSERT: #log + ::text("caught ERROR!")
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
INSERT: ::text@0 + ::text("done")
INSERT: #log::text("[reordered]")
```
