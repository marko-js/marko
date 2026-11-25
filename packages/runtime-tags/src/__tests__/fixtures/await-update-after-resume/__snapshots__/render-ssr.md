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
REMOVE: ::text("loading...")
INSERT: #inside
INSERT: #inside::text("0")
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
  0
</div>
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
REMOVE: #inside
INSERT: ::text("loading...")
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
LOG "effect ran value=1"
```
