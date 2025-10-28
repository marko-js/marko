# Write
```html
  <button>Count: <!>1<!--M_*1 #text/1--></button><!--M_*1 #button/0--><!--M_[--><div>Child: <!>1<!--M_*2 #text/0--></div><!--M_]1 #text/2 2--><div>Parent: <!>1<!--M_*1 #text/4--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={"ConditionalScope:#text/2":_.a={},"ConditionalRenderer:#text/2":"__tests__/tags/custom-tag.marko","#scopeOffset/3":3,x:1},_.a],_.a["#TagVariable"]=_._["__tests__/template.marko_0_y/var"](_.c),_.b),"__tests__/template.marko_0_x",1];M._.w()</script>
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
    <!--M_[-->
    <div>
      Child: 
      <!---->
      1
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2 2-->
    <div>
      Parent: 
      <!---->
      1
      <!--M_*1 #text/4-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          "ConditionalScope:#text/2": _.a = {},
          "ConditionalRenderer:#text/2": "__tests__/tags/custom-tag.marko",
          "#scopeOffset/3": 3,
          x: 1
        }, _.a], _.a["#TagVariable"] = _._[
          "__tests__/template.marko_0_y/var"
          ](_.c), _.b),
        "__tests__/template.marko_0_x",
        1
      ];
      M._.w()
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