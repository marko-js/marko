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
loading...
```
## Change
```
UPDATE: #outside::text "0" => "1"
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
INSERT: #outside + #inside
REMOVE: #inside + ::text("loading...")
UPDATE: #inside::text " " => "1"
```
## Console
```
LOG "effect ran value=1"
LOG "setup effect ran"
```
