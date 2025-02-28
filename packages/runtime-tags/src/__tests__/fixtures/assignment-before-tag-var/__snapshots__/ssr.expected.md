# Write
```html
  <button>+</button><!--M_*1 #button/0--><span>0<!--M_*1 #text/1--> was <!>&zwj;<!--M_*1 #text/2--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a={1:{clickCount:0}}),1,"__tests__/template.marko_0_clickCount",0];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      +
    </button>
    <!--M_*1 #button/0-->
    <span>
      0
      <!--M_*1 #text/1-->
       was 
      <!---->
      ‍
      <!--M_*1 #text/2-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{clickCount:0}}),1,"__tests__/template.marko_0_clickCount",0];M._.w()
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
INSERT html/body/#comment
INSERT html/body/span
INSERT html/body/span/#text0
INSERT html/body/span/#comment0
INSERT html/body/span/#text1
INSERT html/body/span/#comment1
INSERT html/body/span/#text2
INSERT html/body/span/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```