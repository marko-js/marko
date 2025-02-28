# Write
```html
  <button class=inc>1<!--M_*2 #text/1--></button><!--M_*2 #button/0--><div>1<!--M_*1 #text/2--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={1:_.a={"#scopeOffset/1":3,"#childScope/0":_.b={x:1}},2:_.b},_.b["/"]=_._["__tests__/template.marko_0_data/var"](_.a),_.c),2,"__tests__/tags/child.marko_0_x",0];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      1
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <div>
      1
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"#scopeOffset/1":3,"#childScope/0":_.b={x:1}},2:_.b},_.b["/"]=_._["__tests__/template.marko_0_data/var"](_.a),_.c),2,"__tests__/tags/child.marko_0_x",0];M._.w()
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
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/div/#comment
INSERT html/body/script
INSERT html/body/script/#text
```