# Render `{"value":1}`

# Update
```html
<span
  id="child"
>
  1
</span>
```
## Change
```
INSERT: #child
INSERT: #child::text("1")
```
## Console
```
LOG "loaded"
```
