# Render `{"labels":[]}`

# Update `{"labels":["a"]}`
```html
<p>
  item
</p>
```
## Change
```
INSERT: p
UPDATE: body[data-seen] null => "a"
```
