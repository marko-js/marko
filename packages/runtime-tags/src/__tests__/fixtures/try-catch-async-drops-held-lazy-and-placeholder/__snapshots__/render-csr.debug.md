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
INSERT: #log + span
REMOVE: #log::text("[before][after]")
INSERT: #log::text("[before][after][lazy]")
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
INSERT: #log + ::text("ERROR!")
REMOVE: ::text + span
UPDATE: ::text " " => "ERROR!"
```
