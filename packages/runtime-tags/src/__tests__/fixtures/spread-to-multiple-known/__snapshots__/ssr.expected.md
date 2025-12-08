# Write
```html
  <input class=foo><input class=foo>
```

# Render End
```html
<html>
  <head />
  <body>
    <input
      class="foo"
    />
    <input
      class="foo"
    />
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/input0
INSERT html/body/input1
```