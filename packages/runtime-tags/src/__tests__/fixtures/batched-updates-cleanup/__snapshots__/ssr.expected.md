# Write
```html
  <button></button><!--M_*0 #button/0--><span>hi<!--M_*1 #text/0--></span><!--M_|0 #text/1 1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={0:_.a={show:!0,message:"hi","#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={}},1:_.b},_.b._=_.a,_.c),0,"__tests__/template.marko_0_show",0];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*0 #button/0-->
    <span>
      hi
      <!--M_*1 #text/0-->
    </span>
    <!--M_|0 #text/1 1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={show:!0,message:"hi","#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={}},1:_.b},_.b._=_.a,_.c),0,"__tests__/template.marko_0_show",0];M._.w()
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
INSERT html/body/#comment0
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/#comment
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```