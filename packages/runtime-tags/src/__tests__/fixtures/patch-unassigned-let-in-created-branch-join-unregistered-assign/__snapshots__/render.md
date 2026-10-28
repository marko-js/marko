# Render `{"show":false,"v":"a","w":"1"}`

# Update `{"show":true,"v":"b","w":"2"}`
```html
<span>
  function
</span>
<p>
  b2
</p>
```
## Change
```
INSERT: span, p
UPDATE: p::text " " => "b2"
```

# Update `{"show":true,"v":"b","w":"3"}`
```html
<span>
  function
</span>
<p>
  b3
</p>
```
## Change
```
UPDATE: p::text "b2" => "b3"
```
