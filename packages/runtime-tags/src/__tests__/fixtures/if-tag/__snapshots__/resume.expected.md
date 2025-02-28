# Render `{"a":1,"b":2,"x":false,"y":true}`

```html
<!--M_[2-->
<html>
  <head />
  <body>
    Hello
    <!--M_]1 #text/0-->
    <!--M_[3-->
    World
    <!--M_]1 #text/1-->
    <div>
      <!--M_[4-->
      B
      <!--M_]1 #div/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:{input_a:1,input_b:2,input_x:!1,input_y:!0,"#text/0(":0,"#text/0!":_.a={},"#text/1(":0,"#text/1!":_.b={},"#div/2(":1,"#div/2!":_.c={}},2:_.a,3:_.b,4:_.c}),0]
    </script>
  </body>
</html>
```
