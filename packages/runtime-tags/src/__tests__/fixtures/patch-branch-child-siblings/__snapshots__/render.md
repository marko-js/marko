# Render `{"show":false}`

# Update `{"show":true}`
```html
<b>
  child
</b>
<b>
  child
</b>
```
## Change
```
INSERT: b, b
```

# Update `{"show":false}`
## Change
```
REMOVE: b
REMOVE: b
```
