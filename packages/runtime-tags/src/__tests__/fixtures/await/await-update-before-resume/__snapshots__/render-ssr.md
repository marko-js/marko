# Render
```html
<div
  id="outside"
>
  0
</div>
loading...
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
loading...
```
## Change
```
INSERT: #inside::text("0")
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
REMOVE: ::text("loading...")
INSERT: #outside + #inside
```
## Console
```
LOG "effect ran value=1"
LOG "setup effect ran"
```
