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
INSERT: ::text("loading...")
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
REMOVE: ::text("loading...")
INSERT: #inside
```
## Console
```
LOG "setup effect ran"
LOG "effect ran value=1"
```
