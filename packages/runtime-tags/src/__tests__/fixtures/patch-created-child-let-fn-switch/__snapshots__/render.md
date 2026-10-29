# Render `{"show":false,"alt":false,"more":false,"label":"initial"}`

# Update `{"show":true,"alt":false,"more":false,"label":"a"}`

# Update `{"show":true,"alt":false,"more":true,"label":"b"}`
```html
<p>
  p-b
</p>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "p-b"
```

# Update `{"show":true,"alt":false,"more":false,"label":"c"}`
## Change
```
REMOVE: p
```

# Update `{"show":true,"alt":true,"more":true,"label":"d"}`
```html
<p>
  p-d
</p>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "p-d"
```
