# Write
  a<!M$0>b


# Write
  d<!M$0/>efg


# Write
  <t id="M$0">ERROR!</t><script>(M$r=REORDER_RUNTIME)(0)</script>


# Render "End"
```html
<html>
  <head />
  <body>
    aERROR!efg
  </body>
</html>
```

# Mutations
```
inserted #document/html0
inserted #document/html0/head0
inserted #document/html0/body1
inserted #document/html0/body1/#text0
inserted #comment
inserted #text
inserted #comment
inserted #document/html0/body1/#text2
inserted t
inserted #document/html0/body1/#text1
inserted script
inserted script/#text0
removed #document/html0/body1/#text1 in t
inserted #document/html0/body1/#text1
removed script after t
removed t after #document/html0/body1/#text2
removed #comment after #document/html0/body1/#text1
removed #text after #document/html0/body1/#text1
removed #comment after #document/html0/body1/#text1
```