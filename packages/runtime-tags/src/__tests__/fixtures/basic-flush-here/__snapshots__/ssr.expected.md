# Write
```html
  BEFORE-M-<h1>Hello World</h1>-AFTER
```

# Render End
```html
<html>
  <head />
  <body>
    BEFORE-M-
    <h1>
      Hello World
    </h1>
    -AFTER
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text0
INSERT html/body/h1
INSERT html/body/h1/#text
INSERT html/body/#text1
```