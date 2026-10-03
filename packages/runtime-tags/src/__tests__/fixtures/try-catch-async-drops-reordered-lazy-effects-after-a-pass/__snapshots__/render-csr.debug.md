# Render
```html
<div
  id="log"
>
  [before][after]
</div>
```

# Update
```html
<div
  id="log"
>
  [before][after]
</div>
loading
```
## Change
```
INSERT: #log + ::text("loading")
```

# Update
```html
<div
  id="log"
>
  [before][after]
</div>
loadingmid
```
## Change
```
INSERT: ::text@0 + ::text("mid")
UPDATE: ::text@7 " " => "mid"
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
INSERT: #log + ::text("ERROR!")
REMOVE: ::text + ::text("loading")
REMOVE: ::text + ::text("mid")
UPDATE: ::text " " => "ERROR!"
```
