# Write
```html
  <div><!--M_[3--><span>The thing</span><!--M_]2 #text/1--></div><!--M_*2 #div/0--><button>Toggle</button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,{selected:!1,"#childScope/0":_.a={"ConditionalScope:#text/1":_.b={},"ConditionalRenderer:#text/1":"__tests__/template.marko_1_content"}},_.a,_.b]),"__tests__/template.marko_0_selected",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[3-->
      <span>
        The thing
      </span>
      <!--M_]2 #text/1-->
    </div>
    <!--M_*2 #div/0-->
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0,
        {
          selected: !1,
          "#childScope/0": _.a = {
            "ConditionalScope:#text/1": _.b = {},
            "ConditionalRenderer:#text/1": "__tests__/template.marko_1_content"
          }
        }, _.a, _.b]),
        "__tests__/template.marko_0_selected",
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
INSERT html/body/div/span
INSERT html/body/div/span/#text
INSERT html/body/div/#comment1
INSERT html/body/#comment0
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```