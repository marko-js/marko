# Render `{"show":false,"inner":true,"v":"a","w":"1"}`

# Update `{"show":true,"inner":true,"v":"a","w":"2"}`
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

# Update `{"show":true,"inner":false,"v":"a","w":"3"}`
## Change
```
REMOVE: p
```

# Update `{"show":true,"inner":true,"v":"a","w":"4"}`
```html
<p>
  a4
</p>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "a4"
```

# Update `{"show":false,"inner":true,"v":"b","w":"5"}`
## Change
```
REMOVE: p
```

# Update `{"show":true,"inner":true,"v":"b","w":"6"}`
```html
<p>
  b6
</p>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "b6"
```
