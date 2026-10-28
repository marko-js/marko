# Render `{"show":false,"v":"a","w":"1"}`

# Update `{"show":true,"v":"a","w":"2"}`
```html
<p>
  a2
</p>
<span>
  2
</span>
```
## Change
```
INSERT: p, span
UPDATE: p::text " " => "a2"
```

# Update `{"show":true,"v":"a","w":"3"}`
```html
<p>
  a3
</p>
<span>
  3
</span>
```
## Change
```
UPDATE: span::text "2" => "3"
UPDATE: p::text "a2" => "a3"
```
