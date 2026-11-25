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
/>
loading
```
## Change
```
INSERT: ::text("loading")
```

# Update
```html
<div
  id="log"
>
  [reordered]
</div>
caught ERROR!
```
## Change
```
REMOVE: ::text("loading")
INSERT: #log::text("[reordered]")
INSERT: ::text("caught "), ::text("ERROR!")
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
INSERT: ::text("done")
UPDATE: ::text@13 " " => "done"
```
