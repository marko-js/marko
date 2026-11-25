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
INSERT: ::text("loading")
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
INSERT: ::text("mid")
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
REMOVE: ::text("loading")
REMOVE: ::text("mid")
INSERT: ::text("ERROR!")
UPDATE: ::text " " => "ERROR!"
```
