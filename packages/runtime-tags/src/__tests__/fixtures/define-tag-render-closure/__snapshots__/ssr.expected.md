# Write
```html
  <div>1<!--M_*2 #text/0--></div><button>1<!--M_*1 #text/2--></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={x:1,"ClosureScopes:x":_.c=new Set},_.d={_:_.a,"ClosureSignalIndex:x":0}],(_.c).add(_.d),_.b),1,"__tests__/template.marko_0_x"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      1
      <!--M_*2 #text/0-->
    </div>
    <button>
      1
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,_.a={x:1,"ClosureScopes:x":_.c=new Set},_.d={_:_.a,"ClosureSignalIndex:x":0}],(_.c).add(_.d),_.b),1,"__tests__/template.marko_0_x"];M._.w()
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
INSERT html/body/div/#text
INSERT html/body/div/#comment
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```