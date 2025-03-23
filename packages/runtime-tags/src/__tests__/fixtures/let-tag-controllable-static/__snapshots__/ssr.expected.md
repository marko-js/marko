# Write
```html
  <button>1<!--M_*1 #text/1-->|<!>1<!--M_*1 #text/2--></button><!--M_*1 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={1:_.a={y:1}},_.a["TagVariableChange:y"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),1,"__tests__/template.marko_0_y"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      1
      <!--M_*1 #text/1-->
      |
      <!---->
      1
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:_.a={y:1}},_.a["TagVariableChange:y"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),1,"__tests__/template.marko_0_y"];M._.w()
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
INSERT html/body/button/#text0
INSERT html/body/button/#comment0
INSERT html/body/button/#text1
INSERT html/body/button/#comment1
INSERT html/body/button/#text2
INSERT html/body/button/#comment2
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```