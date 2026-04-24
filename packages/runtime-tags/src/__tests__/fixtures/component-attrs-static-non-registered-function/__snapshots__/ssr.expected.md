# Write
```html
  <div>$1.00</div><div>$1.11</div>
```

# Render End
```html
<div>
  $1.00
</div>
<div>
  $1.11
</div>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div0
INSERT div0/#text
INSERT div1
INSERT div1/#text
```