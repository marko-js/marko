# Write
```html
  <div data-children=1><div></div><!--M_=1 #div/0 2--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,{"LoopScopeMap:#div/0":new Map(_.a=[[0,_.b={}]]),children:[1]},_.b]),1,"__tests__/template.marko_0_children"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      data-children="1"
    >
      <div />
      <!--M_=1 #div/0 2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,{"LoopScopeMap:#div/0":new Map(_.a=[[0,_.b={}]]),children:[1]},_.b]),1,"__tests__/template.marko_0_children"];M._.w()
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
INSERT html/body/div/div
INSERT html/body/div/#comment
INSERT html/body/script
INSERT html/body/script/#text
```