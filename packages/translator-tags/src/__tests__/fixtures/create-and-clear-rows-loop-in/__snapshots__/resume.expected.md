# Render {"children":{"1":"a","2":"b","3":"c"}}
```html
<html>
  <head />
  <body>
    <div>
      <p>
        1
        <!--M*1 #text/0-->
        : 
        <!---->
        a
        <!--M*1 #text/1-->
      </p>
      <p>
        2
        <!--M*2 #text/0-->
        : 
        <!---->
        b
        <!--M*2 #text/1-->
      </p>
      <p>
        3
        <!--M*3 #text/0-->
        : 
        <!---->
        c
        <!--M*3 #text/1-->
      </p>
      <!--M|0 #text/0 1,2,3-->
      <p>
        1
        <!--M*4 #text/0-->
      </p>
      <p>
        2
        <!--M*5 #text/0-->
      </p>
      <p>
        3
        <!--M*6 #text/0-->
      </p>
      <!--M|0 #text/1 4,5,6-->
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k,m,o,q,u,x)=&gt;(x={0:h={"#text/0(":new Map([["1",j={}],["2",k={}],["3",m={}]]),"#text/1(":new Map([["1",o={}],["2",q={}],["3",u={}]])},1:j,2:k,3:m,4:o,5:q,6:u,$global:{}},j._=k._=m._=o._=q._=u._=h,x),[])
    </script>
  </body>
</html>
```

# Mutations
```

```