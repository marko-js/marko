# Write
  <div>0: 1</div><div>1: 2</div><div>2: 3</div><div>0<!M*4 #text/0>: <!>1<!M*4 #text/1></div><div>1<!M*5 #text/0>: <!>2<!M*5 #text/1></div><div>2<!M*6 #text/0>: <!>3<!M*6 #text/1></div><!M|0 #text/1 4,5,6><script>(M$h=[]).push((b,s,h,j,k)=>({0:{"#text/1(":new Map([[0,h={}],[1,j={}],[2,k={}]])},4:h,5:j,6:k}),[])</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <div>
      0: 1
    </div>
    <div>
      1: 2
    </div>
    <div>
      2: 3
    </div>
    <div>
      0
      <!--M*4 #text/0-->
      : 
      <!---->
      1
      <!--M*4 #text/1-->
    </div>
    <div>
      1
      <!--M*5 #text/0-->
      : 
      <!---->
      2
      <!--M*5 #text/1-->
    </div>
    <div>
      2
      <!--M*6 #text/0-->
      : 
      <!---->
      3
      <!--M*6 #text/1-->
    </div>
    <!--M|0 #text/1 4,5,6-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;({0:{"#text/1(":new Map([[0,h={}],[1,j={}],[2,k={}]])},4:h,5:j,6:k}),[])
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
inserted #document/html0/body1/div1
inserted #document/html0/body1/div1/#text0
inserted #document/html0/body1/div2
inserted #document/html0/body1/div2/#text0
inserted #document/html0/body1/div3
inserted #document/html0/body1/div3/#text0
inserted #document/html0/body1/div3/#comment1
inserted #document/html0/body1/div3/#text2
inserted #document/html0/body1/div3/#comment3
inserted #document/html0/body1/div3/#text4
inserted #document/html0/body1/div3/#comment5
inserted #document/html0/body1/div4
inserted #document/html0/body1/div4/#text0
inserted #document/html0/body1/div4/#comment1
inserted #document/html0/body1/div4/#text2
inserted #document/html0/body1/div4/#comment3
inserted #document/html0/body1/div4/#text4
inserted #document/html0/body1/div4/#comment5
inserted #document/html0/body1/div5
inserted #document/html0/body1/div5/#text0
inserted #document/html0/body1/div5/#comment1
inserted #document/html0/body1/div5/#text2
inserted #document/html0/body1/div5/#comment3
inserted #document/html0/body1/div5/#text4
inserted #document/html0/body1/div5/#comment5
inserted #document/html0/body1/#comment6
inserted #document/html0/body1/script7
inserted #document/html0/body1/script7/#text0
```