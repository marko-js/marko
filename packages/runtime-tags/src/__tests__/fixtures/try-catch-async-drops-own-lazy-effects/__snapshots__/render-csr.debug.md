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
  [lazy effect ran]
</div>
<span>
  child
</span>
```
## Change
```
INSERT: #log::text("[lazy effect ran]")
INSERT: span
```

# Update
```html
<div
  id="log"
>
  [lazy effect ran]
</div>
ERROR!
```
## Change
```
REMOVE: span
INSERT: ::text("ERROR!")
UPDATE: ::text " " => "ERROR!"
```
