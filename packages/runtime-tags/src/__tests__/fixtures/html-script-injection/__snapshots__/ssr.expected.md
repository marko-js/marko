# Write
```html
  <script>var x = '\x3C/script>'</script>
```

# Render End
```html
<html>
  <head>
    <script>
      var x = '\x3C/script&gt;'
    </script>
  </head>
  <body />
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/head/script
INSERT html/head/script/#text
INSERT html/body
```