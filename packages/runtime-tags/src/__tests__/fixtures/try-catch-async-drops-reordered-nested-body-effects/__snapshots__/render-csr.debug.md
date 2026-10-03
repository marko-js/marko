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
INSERT: #log + ::text("loading")
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
INSERT: #log + :is(::text("caught "), ::text("ERROR!"))
REMOVE: ::text@7 + ::text("loading")
INSERT: #log::text("[reordered]")
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
INSERT: ::text@7 + ::text("done")
UPDATE: ::text@13 " " => "done"
```
