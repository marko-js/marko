# Render `{"show":false,"v":"a"}`

# Update `{"show":true,"v":"b"}`
```html
<span>
  b!
</span>
```
## Change
```
INSERT: span
```

# Update `{"show":true,"v":"c"}`
```html
<span>
  c!
</span>
```
## Change
```
UPDATE: span::text "b!" => "c!"
```
