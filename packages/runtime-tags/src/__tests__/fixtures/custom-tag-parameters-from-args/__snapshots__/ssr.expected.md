# Write
```html
  <button class=inc>1<!--M_*2 #text/1-->,<!>10<!--M_*2 #text/2--></button><!--M_*2 #button/0--><!--M_[--><div>Counts: <!>1<!--M_*3 #text/0-->,<!>10<!--M_*3 #text/1--></div><!--M_]2 #text/3 3--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,1,_.a={"ConditionalScope:#text/3":_.b={},"ConditionalRenderer:#text/3":"__tests__/template.marko_1_content",input_content:_.d={},x:1,y:10},_.b],_.a.input_content=_._["__tests__/template.marko_1_content"](_.d),_.c),"__tests__/tags/custom-tag.marko_0_x_y",2];M._.w()</script>
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
      ,
      <!---->
      10
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_[-->
    <div>
      Counts: 
      <!---->
      1
      <!--M_*3 #text/0-->
      ,
      <!---->
      10
      <!--M_*3 #text/1-->
    </div>
    <!--M_]2 #text/3 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 1, _.a = {
          "ConditionalScope:#text/3": _.b = {},
          "ConditionalRenderer:#text/3": "__tests__/template.marko_1_content",
          input_content: _.d = {},
          x: 1,
          y: 10
        }, _.b], _.a.input_content = _._[
          "__tests__/template.marko_1_content"
          ](_.d), _.c),
        "__tests__/tags/custom-tag.marko_0_x_y",
        2
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
INSERT html/body/button/#text2
INSERT html/body/button/#comment2
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/div
INSERT html/body/div/#text0
INSERT html/body/div/#comment0
INSERT html/body/div/#text1
INSERT html/body/div/#comment1
INSERT html/body/div/#text2
INSERT html/body/div/#comment2
INSERT html/body/div/#text3
INSERT html/body/div/#comment3
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```