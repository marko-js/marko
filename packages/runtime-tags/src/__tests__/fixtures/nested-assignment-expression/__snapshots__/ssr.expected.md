# Write
```html
  <button>0<!--M_*1 #text/1--></button><!--M_*1 #button/0-->used to be <span>0<!--M_*1 #text/2--></span> which should be the same as <span>0<!--M_*1 #text/3--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a={1:{clickCount:0}}),1,"__tests__/template.marko_0_clickCount"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    used to be 
    <span>
      0
      <!--M_*1 #text/2-->
    </span>
     which should be the same as 
    <span>
      0
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{clickCount:0}}),1,"__tests__/template.marko_0_clickCount"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment
INSERT html/body/#text0
INSERT html/body/span0
INSERT html/body/span0/#text
INSERT html/body/span0/#comment
INSERT html/body/#text1
INSERT html/body/span1
INSERT html/body/span1/#text
INSERT html/body/span1/#comment
INSERT html/body/script
INSERT html/body/script/#text
```