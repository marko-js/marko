# Render `{"show":false,"v":"a"}`

# Update `{"show":true,"v":"a","p":{"value":"r"}}`
```html
<b>
  r
</b>
```
## Change
```
INSERT: i
UPDATE: i::text " " => "a"
INSERT: b
REMOVE: b + i
```
