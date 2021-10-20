# Write
  <!M^ROOT>a<!M$0>e...<!M$0/>f


# Write
  gh
  context cleared<!M/ROOT>


# Write
  <t id="M$0">bc2d</t><script>(M$r=REORDER_RUNTIME)(0)</script>


# Render "End"
```html
<!--M^ROOT-->
<html>
  <head />
  <body>
    abc2dfgh
context cleared
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
inserted #comment
inserted #text
inserted #comment
inserted #document/html1/body1/#text2
inserted #document/html1/body1/#comment3
inserted t
inserted #document/html1/body1/#text1
inserted script
inserted script/#text0
removed #document/html1/body1/#text1 in t
inserted #document/html1/body1/#text1
removed script after t
removed t after #document/html1/body1/#comment3
removed #comment after #document/html1/body1/#text1
removed #text after #document/html1/body1/#text1
removed #comment after #document/html1/body1/#text1
```