# Write
  <!M^ROOT>a<!M$0>b


# Write
  cd<!M$0/>fgh<!M/ROOT>


# Render "End"
```html
<!--M^ROOT-->
<html>
  <head />
  <body>
    a
    <!--M$0-->
    bcd
    <!--M$0/-->
    fgh
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
inserted #document/html1/body1/#text2
inserted #document/html1/body1/#comment3
inserted #document/html1/body1/#text4
inserted #document/html1/body1/#comment5
```