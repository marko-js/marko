# Write
```html
  <span>1<!--M_*0 #text/0--></span><span>0<!--M_*0 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a={0:{x:1}}),0,"__tests__/template.marko_0_x",0];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <span>
      1
      <!--M_*0 #text/0-->
    </span>
    <span>
      0
      <!--M_*0 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1}}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/span0
INSERT html/body/span0/#text
INSERT html/body/span0/#comment
INSERT html/body/span1
INSERT html/body/span1/#text
INSERT html/body/span1/#comment
INSERT html/body/script
INSERT html/body/script/#text
```