# Write
```html
  <button>0<!--M_*1 #text/1--></button><!--M_*1 #button/0--><!--M_[--><div>Hello <!>Ryan<!--M_*2 #text/0--> <!>0<!--M_*2 #text/1--></div><!--M_]1 #text/2 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.a={"ConditionalScope:#text/2":_.c={},"ConditionalRenderer:#text/2":"__tests__/template.marko_1_content",count:0,MyTag:_.b={}},_.c],_.b.content=_._["__tests__/template.marko_1_content"](_.a),_.d),"__tests__/template.marko_0_count",1];M._.w()</script>
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
    <!--M_[-->
    <div>
      Hello 
      <!---->
      Ryan
      <!--M_*2 #text/0-->
       
      <!---->
      0
      <!--M_*2 #text/1-->
    </div>
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "ConditionalScope:#text/2": _.c = {},
          "ConditionalRenderer:#text/2": "__tests__/template.marko_1_content",
          count: 0,
          MyTag: _.b = {}
        }, _.c], _.b.content = _._[
          "__tests__/template.marko_1_content"
          ](_.a), _.d),
        "__tests__/template.marko_0_count",
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
INSERT html/body/button/#text
INSERT html/body/button/#comment
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