# Render `{"items":["a","b","c"],"selected":0}`
```html
<b>
  a
</b>
```

# Update `{"items":["a","b","c"],"selected":1}`
```html
<b>
  b
</b>
```
## Change
```
REMOVE: b
INSERT: b
```

# Update `{"items":["a","b","c"],"selected":2}`
```html
<b>
  c
</b>
```
## Change
```
REMOVE: b
INSERT: b
```
