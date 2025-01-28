# Write
```html
  a<!--M_!^b-->b
```

# Write
```html
  cd<!--M_!b-->fgh
```

# Render End
```html
<html>
  <head />
  <body>
    a
    <!--M_!^b-->
    bcd
    <!--M_!b-->
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