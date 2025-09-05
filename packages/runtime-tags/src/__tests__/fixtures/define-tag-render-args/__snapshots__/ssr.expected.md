# Write
```html
  <!--M_[--><div>1<!--M_*2 #text/0-->|<!>Hello<!--M_*2 #text/1-->|<!>1<!--M_*2 #text/2--></div><!--M_]1 #text/0 2--><button>1<!--M_*1 #text/2--></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.a={"ConditionalScope:#text/0":_.c={},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_content",x:1,MyTag:_.b={}},_.c],_.b.content=_._["__tests__/template.marko_1_content"](_.a),_.d),"__tests__/template.marko_0_x",1];M._.w()</script>
```

# Render End
```html
<!--M_[-->
<html>
  <head />
  <body>
    <div>
      1
      <!--M_*2 #text/0-->
      |
      <!---->
      Hello
      <!--M_*2 #text/1-->
      |
      <!---->
      1
      <!--M_*2 #text/2-->
    </div>
    <!--M_]1 #text/0 2-->
    <button>
      1
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "ConditionalScope:#text/0": _.c = {},
          "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content",
          x: 1,
          MyTag: _.b = {}
        }, _.c], _.b.content = _._[
          "__tests__/template.marko_1_content"
          ](_.a), _.d),
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
INSERT #comment
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/div/#text0
INSERT html/body/div/#comment0
INSERT html/body/div/#text1
INSERT html/body/div/#comment1
INSERT html/body/div/#text2
INSERT html/body/div/#comment2
INSERT html/body/div/#text3
INSERT html/body/div/#comment3
INSERT html/body/div/#text4
INSERT html/body/div/#comment4
INSERT html/body/#comment0
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```