# Write
```html
  <button>Count: <!>1<!--M_*1 #text/1--></button><!--M_*1 #button/0--><!--M_[2--><div>1<!--M_*2 #text/0--></div><!--M_]1 #text/2--><div>false<!--M_*3 #text/0--></div><div>true<!--M_*4 #text/0--></div><div>"spread1"<!--M_*5 #text/0--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,{"ConditionalScope:#text/2":_.a={},"ConditionalRenderer:#text/2":"__tests__/tags/custom-tag.marko",x:1},_.a]),1,"__tests__/template.marko_0_x"];M._.w()</script>
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
      1
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2-->
    <div>
      false
      <!--M_*3 #text/0-->
    </div>
    <div>
      true
      <!--M_*4 #text/0-->
    </div>
    <div>
      "spread1"
      <!--M_*5 #text/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/2":_.a={},"ConditionalRenderer:#text/2":"__tests__/tags/custom-tag.marko",x:1},_.a]),1,"__tests__/template.marko_0_x"];M._.w()
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
INSERT html/body/div0/#text
INSERT html/body/div0/#comment
INSERT html/body/#comment2
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/div1/#comment
INSERT html/body/div2
INSERT html/body/div2/#text
INSERT html/body/div2/#comment
INSERT html/body/div3
INSERT html/body/div3/#text
INSERT html/body/div3/#comment
INSERT html/body/script
INSERT html/body/script/#text
```