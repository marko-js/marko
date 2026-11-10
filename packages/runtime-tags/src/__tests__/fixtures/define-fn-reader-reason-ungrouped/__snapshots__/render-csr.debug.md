# Render `{"show":true,"inner":false,"v":"a","w":"1"}`

# Update `{"show":true,"inner":true,"v":"a","w":"1"}`
```html
<p>
  a!1
</p>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "a!1"
```

# Update `{"show":true,"inner":true,"v":"a","w":"2"}`
```html
<p>
  a!2
</p>
```
## Change
```
UPDATE: p::text "a!1" => "a!2"
```
