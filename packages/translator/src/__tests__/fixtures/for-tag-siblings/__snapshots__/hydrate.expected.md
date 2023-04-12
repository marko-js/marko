# Render undefined
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
      (M$h=[]).push((b,s,h,j,k,m,o,q,u,x)=&gt;(x={0:h={"#div/0(":new Map([[0,j={}],[1,k={}],[2,m={}]]),"#text/1(":new Map([[0,o={}],[1,q={}],[2,u={}]])},1:j,2:k,3:m,4:o,5:q,6:u},j._=k._=m._=o._=q._=u._=h,x),[])
    </script>
  </body>
</html>
```

# Mutations
```

```