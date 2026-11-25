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
  [before][after][lazy]
</div>
<span>
  child
</span>
```
## Change
```
REMOVE: #log::text("[before][after]")
INSERT: #log::text("[before][after][lazy]")
INSERT: span
```

# Update
```html
<div
  id="log"
>
  [before][after][lazy][placeholder]
</div>
<span>
  child
</span>
```
## Change
```
REMOVE: #log::text("[before][after][lazy]")
INSERT: #log::text("[before][after][lazy][placeholder]")
```

# Update
```html
<div
  id="log"
>
  [before][after][lazy][placeholder]
</div>
ERROR!
```
## Change
```
REMOVE: span
INSERT: ::text("ERROR!")
UPDATE: ::text " " => "ERROR!"
```
