# Write
```html
  <input class=foo data-a=1>
```

# Render End
```html
<input
  class="foo"
  data-a="1"
/>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT input
```