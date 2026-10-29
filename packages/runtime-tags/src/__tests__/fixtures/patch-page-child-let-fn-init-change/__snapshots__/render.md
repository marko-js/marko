# Render `{"alt":false,"more":false,"label":"a"}`

# Update `{"alt":false,"more":true,"label":"b"}`
```html
<p>
  p-b
</p>
```
## Change
```
INSERT: p
```

# Update `{"alt":false,"more":false,"label":"c"}`
## Change
```
REMOVE: p
```

# Update `{"alt":true,"more":true,"label":"d"}`

## Patch rejected (navigate)
