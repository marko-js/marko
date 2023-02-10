# Write
  <div><div>1<!M#1 #text/0></div><div>2<!M#2 #text/0></div><div>3<!M#3 #text/0></div><!M|0 #div/0 1,2,3></div><!M#0 #div/0><div><div>1<!M#4 #text/0></div><div>2<!M#5 #text/0></div><div>3<!M#6 #text/0></div><!M|0 #text/1 4,5,6><div></div></div><script>(M$h=[]).push((b,s)=>({1:{},2:{},3:{},4:{},5:{},6:{}}),[])</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <div>
      <div>
        1
        <!--M#1 #text/0-->
      </div>
      <div>
        2
        <!--M#2 #text/0-->
      </div>
      <div>
        3
        <!--M#3 #text/0-->
      </div>
      <!--M|0 #div/0 1,2,3-->
    </div>
    <!--M#0 #div/0-->
    <div>
      <div>
        1
        <!--M#4 #text/0-->
      </div>
      <div>
        2
        <!--M#5 #text/0-->
      </div>
      <div>
        3
        <!--M#6 #text/0-->
      </div>
      <!--M|0 #text/1 4,5,6-->
      <div />
    </div>
    <script>
      (M$h=[]).push((b,s)=&gt;({1:{},2:{},3:{},4:{},5:{},6:{}}),[])
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
inserted #document/html0/body1/div0/div0
inserted #document/html0/body1/div0/div0/#text0
inserted #document/html0/body1/div0/div0/#comment1
inserted #document/html0/body1/div0/div1
inserted #document/html0/body1/div0/div1/#text0
inserted #document/html0/body1/div0/div1/#comment1
inserted #document/html0/body1/div0/div2
inserted #document/html0/body1/div0/div2/#text0
inserted #document/html0/body1/div0/div2/#comment1
inserted #document/html0/body1/div0/#comment3
inserted #document/html0/body1/#comment1
inserted #document/html0/body1/div2
inserted #document/html0/body1/div2/div0
inserted #document/html0/body1/div2/div0/#text0
inserted #document/html0/body1/div2/div0/#comment1
inserted #document/html0/body1/div2/div1
inserted #document/html0/body1/div2/div1/#text0
inserted #document/html0/body1/div2/div1/#comment1
inserted #document/html0/body1/div2/div2
inserted #document/html0/body1/div2/div2/#text0
inserted #document/html0/body1/div2/div2/#comment1
inserted #document/html0/body1/div2/#comment3
inserted #document/html0/body1/div2/div4
inserted #document/html0/body1/script3
inserted #document/html0/body1/script3/#text0
```