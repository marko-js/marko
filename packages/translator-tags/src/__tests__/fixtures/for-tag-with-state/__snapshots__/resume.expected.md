# Render undefined
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

```