# Write
```html
  <style>.evil { content: '\3C/style>'; }</style>
```

# Render End
```html
<html>
  <head>
    <style>
      .evil { content: '\3C/style&gt;'; }
    </style>
  </head>
  <body />
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/head/style
INSERT html/head/style/#text
INSERT html/body
```