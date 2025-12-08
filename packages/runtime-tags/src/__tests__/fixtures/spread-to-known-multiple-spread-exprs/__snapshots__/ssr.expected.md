# Write
```html
  <input class=foo data-a=1>
```

# Render End
```html
<html>
  <head />
  <body>
    <input
      class="foo"
      data-a="1"
    />
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/input
```