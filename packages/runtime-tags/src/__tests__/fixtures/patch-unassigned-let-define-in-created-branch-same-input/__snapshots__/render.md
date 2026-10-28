# Render `{"show":false,"v":"a"}`

# Update `{"show":true,"v":"a"}`
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

# Update `{"show":false,"v":"a"}`
## Change
```
REMOVE: p
```

# Update `{"show":true,"v":"a"}`
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
