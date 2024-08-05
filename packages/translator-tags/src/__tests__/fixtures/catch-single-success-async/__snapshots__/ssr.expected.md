# Write
  a<!--M_!^a-->b


# Write
  cd<!--M_!a-->fgh


# Render "End"
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
inserted #document/html0
inserted #document/html0/head0
inserted #document/html0/body1
inserted #document/html0/body1/#text0
inserted #document/html0/body1/#comment1
inserted #document/html0/body1/#text2
inserted #document/html0/body1/#comment3
inserted #document/html0/body1/#text4
```