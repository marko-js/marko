# Write
```html
  <input value=abcd class=foo>
```

# Render End
```html
<input
  class="foo"
  value="abcd"
/>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT input
```