# Write
  <div foo="Hello Marko"></div><!--M_*0 #div/0--><script>WALKER_RUNTIME("M")("_")</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <div
      foo="Hello Marko"
    />
    <!--M_*0 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_")
    </script>
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
inserted #document/html0/body1/script2
inserted #document/html0/body1/script2/#text0
```