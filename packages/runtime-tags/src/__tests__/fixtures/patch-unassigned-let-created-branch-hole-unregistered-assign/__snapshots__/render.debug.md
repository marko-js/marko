# Render `{"show":false,"v":"a"}`
```html
<span>
  function
</span>
```

# Update `{"show":true,"v":"b"}`
```html
<span>
  function
</span>
<p>
  a
</p>
```
## Change
```
INSERT: span + p
UPDATE: p::text " " => "a"
```

# Update `{"show":true,"v":"c"}`
