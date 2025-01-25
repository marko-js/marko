# Write
```html
  <div>0<!--M_*1 #text/0--></div><button></button><!--M_*0 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={0:{count:0,"#childScope/0":_.a={value:0,dummy:{}}},1:_.a}),0,"__tests__/template.marko_0_count",0];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      0
      <!--M_*1 #text/0-->
    </div>
    <button />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{count:0,"#childScope/0":_.a={value:0,dummy:{}}},1:_.a}),0,"__tests__/template.marko_0_count",0];M._.w()
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
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```