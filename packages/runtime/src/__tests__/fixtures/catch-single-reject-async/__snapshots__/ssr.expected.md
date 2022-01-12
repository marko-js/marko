# Write
  <!M^0>a<!M$0>b


# Write
  d<!M$0/>efg<!M/0>


# Write
  <t id="M$0">ERROR!</t><script>(M$r=REORDER_RUNTIME)(0)</script>


# Render "End"
```html
<!--M^0-->
<html>
  <head />
  <body>
    aERROR!efg
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