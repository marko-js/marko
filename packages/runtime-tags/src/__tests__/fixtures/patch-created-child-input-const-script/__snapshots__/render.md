# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<p>
  probe
</p>
```
## Change
```
INSERT: p
UPDATE: body[data-seen] null => "b:b"
```
