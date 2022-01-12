# Write
  <!M^0>a


# Write
  b<!M/0>


# Emit error
  Error: ERROR!


# Render "End"
```html
<!--M^0-->
<html>
  <head />
  <body>
    ab
    <!--M/0-->
  </body>
</html>
```

# Mutations
```
inserted #document/#comment0
inserted #document/html1
inserted #document/html1/head0
inserted #document/html1/body1
inserted #document/html1/body1/#text0
inserted #document/html1/body1/#comment1
```