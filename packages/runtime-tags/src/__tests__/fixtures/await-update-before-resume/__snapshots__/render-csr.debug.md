# Render
```html
<div
  id="outside"
>
  0
</div>
```

# Update
```html
<div
  id="outside"
>
  0
</div>
loading...
```
## Change
```
INSERT: #outside + ::text("loading...")
```

# Update
```html
<div
  id="outside"
>
  1
</div>
<div
  id="inside"
>
  1
</div>
```
## Change
```
UPDATE: #outside::text "0" => "1"
INSERT: #outside + #inside
REMOVE: #inside + ::text("loading...")
```
## Console
```
LOG "effect ran value=1"
LOG "setup effect ran"
```
