# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}
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

```