# Render `{"show":false,"list":["a"]}`

# Update `{"show":true,"list":["b","c"]}`
```html
<p>
  b,c (2)
</p>
```
## Change
```
INSERT: p
UPDATE: p::text@0 "" => "b,c"
UPDATE: p::text@5 "" => "2"
```

# Update `{"show":true,"list":["d"]}`
