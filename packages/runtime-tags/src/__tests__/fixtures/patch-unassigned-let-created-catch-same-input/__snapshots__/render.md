# Render `{"show":false,"v":"a"}`
```html
<p>
  ok
</p>
```

# Update `{"show":true,"v":"a"}`
```html
<b>
  a
</b>
```
## Change
```
INSERT: b
REMOVE: b + p
UPDATE: b::text " " => "a"
```
