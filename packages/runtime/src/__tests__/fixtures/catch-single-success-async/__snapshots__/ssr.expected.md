# Write
  <!M^0>a<!M$0>b


# Write
  cd<!M$0/>fgh<!M/0>


# Render "End"
```html
<!--M^0-->
<html>
  <head />
  <body>
    a
    <!--M$0-->
    bcd
    <!--M$0/-->
    fgh
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
inserted #document/html1/body1/#text2
inserted #document/html1/body1/#comment3
inserted #document/html1/body1/#text4
inserted #document/html1/body1/#comment5
```