# Write
```html
  <div><!--M_[2-->Hello!<!--M_]1 #text/0--><button>Toggle</button><!--M_*1 #button/1--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,{"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.a={},show:!0},_.a]),"__tests__/template.marko_0_show",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[2-->
      Hello!
      <!--M_]1 #text/0-->
      <button>
        Toggle
      </button>
      <!--M_*1 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          "ConditionalRenderer:#text/0": 0,
          "ConditionalScope:#text/0": _.a = {},
          show: !0
        }, _.a]),
        "__tests__/template.marko_0_show",
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
INSERT html/body/div/#comment0
INSERT html/body/div/#text
INSERT html/body/div/#comment1
INSERT html/body/div/button
INSERT html/body/div/button/#text
INSERT html/body/div/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```