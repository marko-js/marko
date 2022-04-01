# Write
  a<!M$0>b


# Write
  cd<!M$0/>fgh


# Render "End"
```html
<html>
  <head />
  <body>
    a
    <!--M$0-->
    bcd
    <!--M$0/-->
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