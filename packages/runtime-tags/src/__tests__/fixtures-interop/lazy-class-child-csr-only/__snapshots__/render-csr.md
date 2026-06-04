# Render `{"value":42}`

# Update
```html
<span
  id="child"
>
  42
</span>
```
## Change
```
INSERT: #child
INSERT: #child::text("42")
```
