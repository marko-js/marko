# Render `{"show":false,"v":"a","w":"1"}`

# Update `{"show":true,"v":"b","w":"2"}`
```html
<p>
  b2
</p>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "b2"
```

# Update `{"show":true,"v":"b","w":"3"}`
```html
<p>
  b3
</p>
```
## Change
```
UPDATE: p::text "b2" => "b3"
```
