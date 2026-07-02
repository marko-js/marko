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
  0
</div>
<div
  id="inside"
>
  0
</div>
```
## Change
```
INSERT: #inside::text("0")
REMOVE: ::text("loading...")
INSERT: #outside + #inside
```
## Console
```
LOG "effect ran value=0"
LOG "setup effect ran"
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
UPDATE: #inside::text "0" => "1"
```
## Console
```
LOG "effect ran value=1"
```
