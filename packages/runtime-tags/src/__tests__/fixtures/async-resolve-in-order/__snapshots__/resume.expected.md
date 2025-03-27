# Render
```html
<html>
  <head />
  <body>
    a
    <!--M_[2-->
    b
    <!--M_]1 #text/0-->
    c
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,1,_.c={}],(_.b={}["ConditionalScope:#text/0"]=_.c),_.a)]
    </script>
    <!--M_[3-->
    d
    <!--M_]1 #text/1-->
    e
    <script>
      M._.r.push(_=&gt;(_.d=[_.e={}],(_.b["ConditionalScope:#text/1"]=_.e),_.d))
    </script>
  </body>
</html>
```
