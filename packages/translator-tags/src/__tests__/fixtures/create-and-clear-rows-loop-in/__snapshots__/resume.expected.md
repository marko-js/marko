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
      (M$h=[]).push((b,s,h,j,k,m,o,q)=&gt;({0:{"#text/0(":new Map([["1",h={}],["2",j={}],["3",k={}]]),"#text/1(":new Map([["1",m={}],["2",o={}],["3",q={}]])},1:h,2:j,3:k,4:m,5:o,6:q}),[])
    </script>
  </body>
</html>
```

# Mutations
```

```