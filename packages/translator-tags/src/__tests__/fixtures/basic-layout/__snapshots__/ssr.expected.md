# Write
  <body><!M[2><h1>Hello <!>World<!M*2 #text/0></h1><!M]1 #text/0></body><script>(M$h=[]).push((b,s,h,j)=>({0:{"#childScope/0":h={"#text/0!":j={}}},1:h,2:j}),[])</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <!--M[2-->
    <h1>
      Hello 
      <!---->
      World
      <!--M*2 #text/0-->
    </h1>
    <!--M]1 #text/0-->
    <script>
      (M$h=[]).push((b,s,h,j)=&gt;({0:{"#childScope/0":h={"#text/0!":j={}}},1:h,2:j}),[])
    </script>
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
inserted #document/html0/body1/h11/#comment3
inserted #document/html0/body1/#comment2
inserted #document/html0/body1/script3
inserted #document/html0/body1/script3/#text0
```