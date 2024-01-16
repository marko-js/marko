# Write
  <div>s0<!M*0 #text/0></div>s1<!M*0 #text/1>


# Render "End"
```html
<html>
  <head />
  <body>
    <div>
      s0
      <!--M*0 #text/0-->
    </div>
    s1
    <!--M*0 #text/1-->
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
```