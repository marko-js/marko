# Write
```html
  <div><button>0<!--M_*1 #text/1--></button><!--M_*1 #button/0--><div></div><!--M_*1 #div/2--><div></div><!--M_*1 #div/3--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{clickCount:0}]),"__tests__/template.marko_0_clickCount",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <button>
        0
        <!--M_*1 #text/1-->
      </button>
      <!--M_*1 #button/0-->
      <div />
      <!--M_*1 #div/2-->
      <div />
      <!--M_*1 #div/3-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{clickCount:0}]),"__tests__/template.marko_0_clickCount",1];M._.w()
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
INSERT html/body/div/button
INSERT html/body/div/button/#text
INSERT html/body/div/button/#comment
INSERT html/body/div/#comment0
INSERT html/body/div/div0
INSERT html/body/div/#comment1
INSERT html/body/div/div1
INSERT html/body/div/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```