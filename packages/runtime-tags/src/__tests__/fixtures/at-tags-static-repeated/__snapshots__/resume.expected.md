# Render
```html
<html>
  <head />
  <body>
    <!--M_[4-->
    Hello
    <!--M_]3 #text/0-->
    <!--M_[6-->
    Again
    <!--M_]5 #text/0-->
    <!--M_|2 #text/0 5 3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,1,{"LoopScopeMap:#text/0":new Map(_.a=[[0,_.b={"ConditionalScope:#text/0":_.c={},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"}],[1,_.d={"ConditionalScope:#text/0":_.e={},"ConditionalRenderer:#text/0":"__tests__/template.marko_2_renderer"}]])},_.b,_.c,_.d,_.e])]
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
INSERT html/body/#text2
```