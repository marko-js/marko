# Write
```html
  <script>var x = '\x3C/script>'</script>
```

# Render End
```html
<script>
  var x = '\x3C/script&gt;'
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT script
INSERT script/#text
```