# Render `{"show":false,"v":"a","w":"1"}`

# Update `{"show":true,"v":"a","w":"2"}`
```html
<p>
  a2
</p>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "a2"
```

# Update `{"show":true,"v":"a","w":"3"}`
```html
<p>
  a3
</p>
```
## Change
```
UPDATE: p::text "a2" => "a3"
```
