# Write
```html
  <span>child</span><div>parent 1</div>
```

# Render End
```html
<span>
  child
</span>
<div>
  parent 1
</div>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT span
INSERT span/#text
INSERT div
INSERT div/#text
```