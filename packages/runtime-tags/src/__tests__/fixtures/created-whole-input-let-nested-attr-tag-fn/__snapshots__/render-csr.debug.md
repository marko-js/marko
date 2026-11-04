# Render `{"show":false,"on":true,"label":"a"}`

# Update `{"show":true,"on":true,"label":"b"}`
```html
<p>
  f:b
</p>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "f:b"
```
