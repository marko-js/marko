# Write
  <body><!M#0 1><h1>Hello <!M#0 2>World</h1></body>


# Render "End"
```html
<html>
  <head />
  <body>
    <!--M#0 1-->
    <h1>
      Hello 
      <!--M#0 2-->
      World
    </h1>
  </body>
</html>
```

# Mutations
```
inserted #document/html0
inserted #document/html0/head0
inserted #document/html0/body1
inserted #document/html0/body1/#comment0
inserted #document/html0/body1/h11
inserted #document/html0/body1/h11/#text0
inserted #document/html0/body1/h11/#comment1
inserted #document/html0/body1/h11/#text2
```