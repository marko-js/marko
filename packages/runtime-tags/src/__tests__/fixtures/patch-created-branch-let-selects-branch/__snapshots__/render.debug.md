# Render `{"show":false,"open":true,"label":"a"}`

# Update `{"show":true,"open":true,"label":"b"}`
```html
<span>
  b
</span>
```
## Change
```
INSERT: span
```

# Update `{"show":true,"open":true,"label":"c"}`
```html
<span>
  c
</span>
```
## Change
```
UPDATE: span::text "b" => "c"
```

# Update `{"show":false,"open":false,"label":"d"}`
## Change
```
REMOVE: span
```

# Update `{"show":true,"open":false,"label":"e"}`
