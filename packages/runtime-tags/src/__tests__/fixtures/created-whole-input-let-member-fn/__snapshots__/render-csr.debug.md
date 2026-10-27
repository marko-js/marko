# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
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
