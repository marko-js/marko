# Write
  <div>a<!M*1 #text/0>b<!M*2 #text/0>c<!M*3 #text/0><!M|0 #div/0 1,2,3></div><!M*0 #div/0><script>(M$h=[]).push((b,s,h,j,k)=>({0:{"#div/0(":new Map([[1,h={}],[2,j={}],[3,k={}]])},1:h,2:j,3:k}),[])</script>


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
      (M$h=[]).push((b,s,h,j,k)=&gt;({0:{"#div/0(":new Map([[1,h={}],[2,j={}],[3,k={}]])},1:h,2:j,3:k}),[])
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