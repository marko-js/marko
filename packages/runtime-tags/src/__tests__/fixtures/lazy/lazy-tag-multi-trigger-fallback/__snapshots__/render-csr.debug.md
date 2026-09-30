# Render `{"value":1}`
## Console
```
WARN "A lazy load trigger could not find an element matching \".nope1\". The module was loaded immediately."
WARN "A lazy load trigger could not find an element matching \".nope2\". The module was loaded immediately."
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
