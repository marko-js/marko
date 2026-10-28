# Render `{"show":false,"v":"a"}`

# Update `{"show":true,"v":"b"}`
```html
<p>
  a
</p>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "a"
```
