# Render
```html
<div
  id="log"
/>
<span>
  child
</span>
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
REMOVE: span
INSERT: #log::text("[before]")
REMOVE: #log::text("[before]")
INSERT: #log::text("[before][after]")
```
