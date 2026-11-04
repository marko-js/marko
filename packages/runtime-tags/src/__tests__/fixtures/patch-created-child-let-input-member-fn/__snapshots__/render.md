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
INSERT: p
INSERT: p:nth-of-type(1) + p
```
