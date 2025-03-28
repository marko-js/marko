# Render
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


# Render ASYNC
```html
<html>
  <head />
  <body>
    <div
      data-children="2"
    >
      <div />
      <!--M_=1 #div/0 2-->
      <div />
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,{"LoopScopeMap:#div/0":new Map(_.a=[[0,_.b={}]]),children:[1]},_.b]),1,"__tests__/template.marko_0_children"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[data-children] "1" => "2"
INSERT html/body/div/div1
```