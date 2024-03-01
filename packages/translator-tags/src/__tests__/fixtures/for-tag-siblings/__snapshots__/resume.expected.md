# Render undefined
```html
<html>
  <head />
  <body>
    <div>
      <div>
        1
        <!--M*1 #text/0-->
      </div>
      <div>
        2
        <!--M*2 #text/0-->
      </div>
      <div>
        3
        <!--M*3 #text/0-->
      </div>
      <!--M|0 #div/0 1,2,3-->
    </div>
    <!--M*0 #div/0-->
    <div>
      <div>
        1
        <!--M*4 #text/0-->
      </div>
      <div>
        2
        <!--M*5 #text/0-->
      </div>
      <div>
        3
        <!--M*6 #text/0-->
      </div>
      <!--M|0 #text/1 4,5,6-->
      <div />
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k,m,o,q)=&gt;({0:{"#div/0(":new Map([[0,h={}],[1,j={}],[2,k={}]]),"#text/1(":new Map([[0,m={}],[1,o={}],[2,q={}]])},1:h,2:j,3:k,4:m,5:o,6:q}),[])
    </script>
  </body>
</html>
```

# Mutations
```

```