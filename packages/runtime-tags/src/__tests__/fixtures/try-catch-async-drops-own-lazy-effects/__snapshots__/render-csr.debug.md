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
INSERT: #log + span
INSERT: #log::text("[lazy effect ran]")
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
INSERT: #log + ::text("ERROR!")
REMOVE: ::text + span
UPDATE: ::text " " => "ERROR!"
```
