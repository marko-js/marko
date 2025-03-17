# Render `{"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}`

```html
<html>
  <head />
  <body>
    a
    <!--M_*2 #text/0-->
    b
    <!--M_*3 #text/0-->
    c
    <!--M_*4 #text/0-->
    <!--M_|1 #text/0 4 3 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:{"#text/0(":new Map(_.a=[[1,_.b={}],[2,_.c={}],[3,_.d={}]])},2:_.b,3:_.c,4:_.d})]
    </script>
  </body>
</html>
```
