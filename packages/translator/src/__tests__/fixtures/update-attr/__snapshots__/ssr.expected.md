# Write
  <div a=0 b=1></div><!M#0 #div/0>


# Render "End"
```html
<html>
  <head />
  <body>
    <div
      a="0"
      b="1"
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