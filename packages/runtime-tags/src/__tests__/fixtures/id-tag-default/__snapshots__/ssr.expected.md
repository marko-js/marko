# Write
```html
  <button>toggle</button><!--M_*1 #button/0--><div id=foo>foo</div><div id=sM_1>bar</div><!--M_*1 #div/2--><div id=baz>baz</div><!--M_*1 #div/3--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{baz:"baz"}]),"__tests__/template.marko_0_bar_baz 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      toggle
    </button>
    <!--M_*1 #button/0-->
    <div
      id="foo"
    >
      foo
    </div>
    <div
      id="sM_1"
    >
      bar
    </div>
    <!--M_*1 #div/2-->
    <div
      id="baz"
    >
      baz
    </div>
    <!--M_*1 #div/3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          baz: "baz"
        }]),
        "__tests__/template.marko_0_bar_baz 1"
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
INSERT html/body/#comment0
INSERT html/body/div0
INSERT html/body/div0/#text
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/#comment1
INSERT html/body/div2
INSERT html/body/div2/#text
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```