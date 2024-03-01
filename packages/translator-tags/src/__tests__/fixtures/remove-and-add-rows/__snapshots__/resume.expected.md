# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}
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

```