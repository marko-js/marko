# Write
```html
  <span>1<!--M_*1 #text/0--></span><span>0<!--M_*1 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a={1:{x:1}}),1,"__tests__/template.marko_0_x"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <span>
      1
      <!--M_*1 #text/0-->
    </span>
    <span>
      0
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{x:1}}),1,"__tests__/template.marko_0_x"];M._.w()
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