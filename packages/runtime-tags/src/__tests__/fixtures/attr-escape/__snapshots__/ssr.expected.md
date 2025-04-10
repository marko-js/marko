# Write
```html
  <div class=c foo=acb bar="a d b" nested="a c nested d b"></div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      bar="a d b"
      class="c"
      foo="acb"
      nested="a c nested d b"
    />
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
```