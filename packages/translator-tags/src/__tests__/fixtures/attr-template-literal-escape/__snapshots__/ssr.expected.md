# Write
  <div foo="Hello Marko"></div><!M*0 #div/0>


# Render "End"
```html
<html>
  <head />
  <body>
    <div
      foo="Hello Marko"
    />
    <!--M*0 #div/0-->
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