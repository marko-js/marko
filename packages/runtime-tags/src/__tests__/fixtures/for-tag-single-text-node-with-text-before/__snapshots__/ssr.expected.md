# Write
```html
  <div data-children=1>Before <!--M_[2-->Child<!--M_]1 #text/1--></div><!--M_*1 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,{"LoopScopeMap:#text/1":new Map(_.a=[[0,_.b={}]]),children:[1]},_.b]),1,"__tests__/template.marko_0_children"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      data-children="1"
    >
      Before 
      <!--M_[2-->
      Child
      <!--M_]1 #text/1-->
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,{"LoopScopeMap:#text/1":new Map(_.a=[[0,_.b={}]]),children:[1]},_.b]),1,"__tests__/template.marko_0_children"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/div/#text0
INSERT html/body/div/#comment0
INSERT html/body/div/#text1
INSERT html/body/div/#comment1
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```