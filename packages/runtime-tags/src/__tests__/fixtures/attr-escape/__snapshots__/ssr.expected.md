# Write
```html
  <div class=c foo=acb bar="a d b" nested="a c nested d b"></div>
```

# Render End
```html
<div
  bar="a d b"
  class="c"
  foo="acb"
  nested="a c nested d b"
/>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div
```