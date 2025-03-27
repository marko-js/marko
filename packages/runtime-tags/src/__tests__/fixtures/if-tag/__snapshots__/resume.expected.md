# Render `{"a":1,"b":2,"x":false,"y":true}`

```html
<html>
  <head />
  <body>
    <!--M_[2-->
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,{input_a:1,input_b:2,input_x:!1,input_y:!0,"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={},"ConditionalRenderer:#div/2":1,"ConditionalScope:#div/2":_.c={}},_.a,_.b,_.c])]
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
```