# Write
  <div class=c foo=acb bar="a d b" nested="a c nested d b"></div><!M#0 #div/0>


# Render "End"
```html
<html>
  <head />
  <body>
    <div
      bar="a d b"
      class="c"
      foo="acb"
      nested="a c nested d b"
    />
    <!--M#0 #div/0-->
  </body>
</html>
```

# Mutations
```
inserted #document/html0
inserted #document/html0/head0
inserted #document/html0/body1
inserted #document/html0/body1/div0
inserted #document/html0/body1/#comment1
```