# Render `{"show":false,"v":"a","w":"1"}`

# Update `{"show":true,"v":"a","w":"2"}`
```html
<p>
  a2
</p>
<span>
  a
</span>
```
## Change
```
INSERT: p, span
UPDATE: span::text " " => "a"
UPDATE: p::text " " => "a2"
```

# Update `{"show":true,"v":"a","w":"3"}`
```html
<p>
  a3
</p>
<span>
  a
</span>
```
## Change
```
UPDATE: p::text "a2" => "a3"
```

# Update `{"show":false,"v":"b","w":"4"}`
## Change
```
REMOVE: p
REMOVE: span
```

# Update `{"show":true,"v":"b","w":"5"}`
```html
<p>
  b5
</p>
<span>
  b
</span>
```
## Change
```
INSERT: p, span
UPDATE: span::text " " => "b"
UPDATE: p::text " " => "b5"
```
