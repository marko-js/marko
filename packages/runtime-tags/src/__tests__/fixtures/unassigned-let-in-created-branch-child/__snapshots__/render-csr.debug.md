# Render `{"show":false,"v":"a"}`

# Update `{"show":true,"v":"b"}`
```html
<span>
  function
</span>
<em>
  b
</em>
```
## Change
```
INSERT: span, em
UPDATE: em::text " " => "b"
```

# Update `{"show":true,"v":"c"}`
