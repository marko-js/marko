# Render `{"show":false,"label":"a"}`
```html
<p>
  root:a
</p>
```

# Update `{"show":true,"label":"b"}`
```html
<p>
  root:a
</p>
<p>
  if:b
</p>
```
## Change
```
INSERT: p:nth-of-type(1) + p
```
