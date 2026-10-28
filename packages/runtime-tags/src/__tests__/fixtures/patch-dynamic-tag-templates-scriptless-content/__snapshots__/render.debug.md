# Render `{"tag":"div","bold":true,"label":"a"}`
```html
<div>
  <b>
    a
  </b>
</div>
```

# Update `{"tag":"div","bold":false,"label":"b"}`
```html
<div>
  <i>
    b
  </i>
</div>
```
## Change
```
INSERT: div > i
REMOVE: div > i + b
UPDATE: div > i::text " " => "b"
```
