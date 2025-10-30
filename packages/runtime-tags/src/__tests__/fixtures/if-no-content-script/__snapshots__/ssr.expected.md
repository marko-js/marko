# Write
```html
  <div></div><!--M_*1 #div/0--><button>0<!--M_*1 #text/2--></button><!--M_*1 #button/1--><!--M_[--><!--M_]1 #text/3 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ConditionalScope:#text/3":_.b={},count:0},_.b],_.b._=_.a,_.c),"__tests__/template.marko_1",2,"__tests__/template.marko_0_count",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*1 #div/0-->
    <button>
      0
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <!--M_[-->
    <!--M_]1 #text/3 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/3": _.b = {},
          count: 0
        }, _.b], _.b._ = _.a, _.c),
        "__tests__/template.marko_1",
        2,
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
INSERT html/body/div
INSERT html/body/#comment0
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment1
INSERT html/body/#comment2
INSERT html/body/#comment3
INSERT html/body/script
INSERT html/body/script/#text
```