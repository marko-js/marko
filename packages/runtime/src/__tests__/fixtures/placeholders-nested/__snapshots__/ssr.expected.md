# Write
  <!M^0>a<!M$1>i...<!M$1/>j


# Write
  kl<!M/0>


# Write
  <t id="M$1">bcd<!M$0>h...<!M$0/></t><script>(M$r=REORDER_RUNTIME)(1)</script>


# Write
  <t id="M$0">efg</t><script>M$r(0)</script>


# Render "End"
```html
<!--M^0-->
<html>
  <head />
  <body>
    abcdefgjkl
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
inserted #document/html1/body1/#text3
inserted #document/html1/body1/#comment4
inserted t
inserted #document/html1/body1/#text1
inserted #comment
inserted #text
inserted #comment
inserted script
inserted script/#text0
removed #document/html1/body1/#text1 before #comment
inserted #document/html1/body1/#text1
removed #comment before #text
inserted #comment
removed #text before #comment
inserted #text
removed #comment in t
inserted #comment
removed script after t
removed t after #document/html1/body1/#comment4
removed #comment after #comment
removed #text after #comment
removed #comment after #comment
inserted t
inserted #document/html1/body1/#text2
inserted script
inserted script/#text0
removed #document/html1/body1/#text2 in t
inserted #document/html1/body1/#text2
removed script after t
removed t after #document/html1/body1/#comment4
removed #comment after #document/html1/body1/#text2
removed #text after #document/html1/body1/#text2
removed #comment after #document/html1/body1/#text2
```