# Render `{"show":false,"v":"a","w":"1"}`

# Update `{"show":true,"v":"a","w":"2"}`
```html
<p>
  a2
</p>
<p>
  a2
</p>
```
## Change
```
INSERT: p
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(1)::text " " => "a2"
UPDATE: p:nth-of-type(2)::text " " => "a2"
```

# Update `{"show":true,"v":"a","w":"3"}`
```html
<p>
  a3
</p>
<p>
  a3
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "a2" => "a3"
UPDATE: p:nth-of-type(2)::text "a2" => "a3"
```
