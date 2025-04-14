# Write
```html
  <button>Count: <!>1<!--M_*1 #text/1--></button><!--M_*1 #button/0--><!--M_[2--><div>Child: <!>1<!--M_*2 #text/0--></div><!--M_]1 #text/2--><div>Parent: <!>1<!--M_*1 #text/4--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ConditionalScope:#text/2":_.b={},"ConditionalRenderer:#text/2":"__tests__/tags/custom-tag.marko","#scopeOffset/3":3,x:1},_.b],_.b["#TagVariable"]=_._["__tests__/template.marko_0_y/var"](_.a),_.c),"__tests__/template.marko_0_x",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      Count: 
      <!---->
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <div>
      Child: 
      <!---->
      1
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2-->
    <div>
      Parent: 
      <!---->
      1
      <!--M_*1 #text/4-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={"ConditionalScope:#text/2":_.b={},"ConditionalRenderer:#text/2":"__tests__/tags/custom-tag.marko","#scopeOffset/3":3,x:1},_.b],_.b["#TagVariable"]=_._["__tests__/template.marko_0_y/var"](_.a),_.c),"__tests__/template.marko_0_x",1];M._.w()
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
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/div0
INSERT html/body/div0/#text0
INSERT html/body/div0/#comment0
INSERT html/body/div0/#text1
INSERT html/body/div0/#comment1
INSERT html/body/#comment2
INSERT html/body/div1
INSERT html/body/div1/#text0
INSERT html/body/div1/#comment0
INSERT html/body/div1/#text1
INSERT html/body/div1/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```