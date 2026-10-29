# Render `{"show":true,"v":"a","w":"1","items":["a","b"]}`
```html
<p>
  a1
</p>
<p>
  b1
</p>
```

# Update `{"show":false,"v":"b","w":"2","items":["c"]}`
```html
<p>
  a2
</p>
<p>
  b2
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "a1" => "a2"
UPDATE: p:nth-of-type(2)::text "b1" => "b2"
```

# Update `{"show":true,"v":"c","w":"3","items":["d","e"]}`
```html
<p>
  a3
</p>
<p>
  b3
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "a2" => "a3"
UPDATE: p:nth-of-type(2)::text "b2" => "b3"
```
