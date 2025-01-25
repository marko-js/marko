# Write
```html
  a<!--M_!^a-->b
```

# Write
```html
  cd<!--M_!a-->fgh
```

# Render End
```html
<html>
  <head />
  <body>
    a
    <!--M_!^a-->
    bcd
    <!--M_!a-->
    fgh
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text0
INSERT html/body/#comment0
INSERT html/body/#text1
INSERT html/body/#comment1
INSERT html/body/#text2
```