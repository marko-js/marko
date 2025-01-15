# Write
  <div>1<!--M_*0 #text/0--></div>2<!--M_*0 #text/1--><!--M_$0--><script>WALKER_RUNTIME("M")("_")</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <div>
      1
      <!--M_*0 #text/0-->
    </div>
    2
    <!--M_*0 #text/1-->
    <!--M_$0-->
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
inserted #document/html0/body1/div0/#text0
inserted #document/html0/body1/div0/#comment1
inserted #document/html0/body1/#text1
inserted #document/html0/body1/#comment2
inserted #document/html0/body1/#comment3
inserted #document/html0/body1/script4
inserted #document/html0/body1/script4/#text0
```