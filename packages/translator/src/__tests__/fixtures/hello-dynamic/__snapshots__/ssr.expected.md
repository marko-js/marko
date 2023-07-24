# Write
  Hello <!>Marko<!M#0 #text/0>! Hello <!>Marko<!M#0 #text/1>! Hello <!><!M#0 #text/2>!


# Render "End"
```html
<html>
  <head />
  <body>
    Hello 
    <!---->
    Marko
    <!--M#0 #text/0-->
    ! Hello 
    <!---->
    Marko
    <!--M#0 #text/1-->
    ! Hello 
    <!---->
    <!--M#0 #text/2-->
    !
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
inserted #document/html0/body1/#text6
inserted #document/html0/body1/#comment7
inserted #document/html0/body1/#text8
inserted #document/html0/body1/#comment9
inserted #document/html0/body1/#comment10
inserted #document/html0/body1/#text11
```