# Write
```html
  <!--M_[--><div>Hello <!>1<!--M_*3 #text/0--></div><!--M_]1 #text/0 2--><button>1<!--M_*1 #text/2--></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={x:1},{_:_.a,"#childScope/0":_.b={}},_.b]),"__tests__/template.marko_0_x 1"];M._.w()</script>
```

# Render End
```html
<!--M_[-->
<html>
  <head />
  <body>
    <div>
      Hello 
      <!---->
      1
      <!--M_*3 #text/0-->
    </div>
    <!--M_]1 #text/0 2-->
    <button>
      1
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          x: 1
        },
        {
          _: _.a,
          "#childScope/0": _.b = {}
        }, _.b]),
        "__tests__/template.marko_0_x 1"
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
INSERT html/body/#comment0
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```