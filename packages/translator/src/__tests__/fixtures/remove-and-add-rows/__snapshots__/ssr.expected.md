# Write
  <div>a<!M#1 #text/0>b<!M#2 #text/0>c<!M#3 #text/0><!M|0 #div/0 1,2,3></div><!M#0 #div/0><script>(M$h=[]).push((b,s,h,j,k,m,o)=>(o={0:h={"#div/0(":new Map([[1,j={}],[2,k={}],[3,m={}]])},1:j,2:k,3:m},j._=k._=m._=h,o),[])</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <div>
      a
      <!--M#1 #text/0-->
      b
      <!--M#2 #text/0-->
      c
      <!--M#3 #text/0-->
      <!--M|0 #div/0 1,2,3-->
    </div>
    <!--M#0 #div/0-->
    <script>
      (M$h=[]).push((b,s,h,j,k,m,o)=&gt;(o={0:h={"#div/0(":new Map([[1,j={}],[2,k={}],[3,m={}]])},1:j,2:k,3:m},j._=k._=m._=h,o),[])
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