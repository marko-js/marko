# Write
  <!M^ROOT>a


# Write
  b<!M/ROOT>


# Emit error
  Error: ERROR!


# Render "End"
```html
<!--M^ROOT-->
<html>
  <head />
  <body>
    ab
    <!--M/ROOT-->
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