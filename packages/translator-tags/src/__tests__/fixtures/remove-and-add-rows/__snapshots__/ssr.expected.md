# Write
  <div>a<!M*1 #text/0>b<!M*2 #text/0>c<!M*3 #text/0><!M|0 #div/0 1,2,3></div><!M*0 #div/0><script>(M$h=[]).push(_=>(_.e={0:{"#div/0(":new Map(_.a=[[1,_.b={"#scope":1}],[2,_.c={"#scope":2}],[3,_.d={"#scope":3}]]),"#scope":0},1:_.b,2:_.c,3:_.d}),[])</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <div>
      a
      <!--M*1 #text/0-->
      b
      <!--M*2 #text/0-->
      c
      <!--M*3 #text/0-->
      <!--M|0 #div/0 1,2,3-->
    </div>
    <!--M*0 #div/0-->
    <script>
      (M$h=[]).push(_=&gt;(_.e={0:{"#div/0(":new Map(_.a=[[1,_.b={"#scope":1}],[2,_.c={"#scope":2}],[3,_.d={"#scope":3}]]),"#scope":0},1:_.b,2:_.c,3:_.d}),[])
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
inserted #document/html0/body1/div0/#text2
inserted #document/html0/body1/div0/#comment3
inserted #document/html0/body1/div0/#text4
inserted #document/html0/body1/div0/#comment5
inserted #document/html0/body1/div0/#comment6
inserted #document/html0/body1/#comment1
inserted #document/html0/body1/script2
inserted #document/html0/body1/script2/#text0
```