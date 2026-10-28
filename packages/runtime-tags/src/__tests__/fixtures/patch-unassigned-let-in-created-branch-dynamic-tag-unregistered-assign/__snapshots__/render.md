# Render `{"show":false,"v":"a"}`

# Update `{"show":true,"v":"b"}`
```html
<span>
  function
</span>
<b>
  b
</b>
```
## Change
```
INSERT: span, b
UPDATE: b::text " " => "b"
```
