# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<p>
  b
</p>
<p>
  f:b
</p>
```
## Change
```
INSERT: p, p
UPDATE: p:nth-of-type(1)::text " " => "b"
UPDATE: p:nth-of-type(2)::text " " => "f:b"
```
