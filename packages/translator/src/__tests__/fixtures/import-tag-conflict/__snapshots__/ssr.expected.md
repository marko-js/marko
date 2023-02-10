# Write
  a<!M#0 #text/0> <!>b<!M#0 #text/1>


# Render "End"
```html
<html>
  <head />
  <body>
    a
    <!--M#0 #text/0-->
     
    <!---->
    b
    <!--M#0 #text/1-->
  </body>
</html>
```

# Mutations
```
inserted #document/html0
inserted #document/html0/head0
inserted #document/html0/body1
inserted #document/html0/body1/#text0
inserted #document/html0/body1/#comment1
inserted #document/html0/body1/#text2
inserted #document/html0/body1/#comment3
inserted #document/html0/body1/#text4
inserted #document/html0/body1/#comment5
```