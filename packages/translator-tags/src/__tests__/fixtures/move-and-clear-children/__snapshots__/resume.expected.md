# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}
```html
<html>
  <head />
  <body>
    <div>
      a
      <!--M_*1 #text/0-->
      b
      <!--M_*2 #text/0-->
      c
      <!--M_*3 #text/0-->
      <!--M_|0 #div/0 1,2,3-->
    </div>
    <!--M_*0 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.e={0:{"#div/0(":new Map(_.a=[[1,_.b={}],[2,_.c={}],[3,_.d={}]])},1:_.b,2:_.c,3:_.d})];M._.d=1
    </script>
  </body>
</html>
```

# Mutations
```

```