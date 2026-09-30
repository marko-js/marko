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
loadingmid
```
## Change
```
INSERT: ::text@0 + ::text("mid")
```

# Update
```html
<div
  id="log"
>
  [before][after]
</div>
ERROR!
```
## Change
```
INSERT: ::text("ERROR!")
REMOVE: ::text("loading")
REMOVE: ::text("mid")
INSERT: #log::text("[before]")
REMOVE: #log::text("[before]")
INSERT: #log::text("[before][after]")
```
