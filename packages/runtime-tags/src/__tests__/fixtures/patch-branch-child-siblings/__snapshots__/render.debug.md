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
INSERT: b
INSERT: b:nth-of-type(1) + b
```

# Update `{"show":false}`
## Change
```
REMOVE: b
REMOVE: b
```
