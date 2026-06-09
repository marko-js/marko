# Render `{"value":1}`
## Console
```
WARN "A lazy load trigger could not find an element matching \".nonexistent\". The module was loaded immediately."
```

# Update
```html
<span>
  1
</span>
```
## Change
```
INSERT: span
```
## Console
```
LOG "loaded"
```
