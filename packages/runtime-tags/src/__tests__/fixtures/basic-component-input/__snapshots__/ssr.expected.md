# Write
```html
  <button>0<!--M_*2 #text/1--></button><!--M_*2 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={clickCount:0,"#childScope/0":_.a={}},_.a],_.a.onClick=_._["__tests__/template.marko_0/onClick"](_.c),_.b),"__tests__/tags/my-button.marko_0_onClick 2"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          clickCount: 0,
          "#childScope/0": _.a = {}
        }, _.a], _.a.onClick = _._[
          "__tests__/template.marko_0/onClick"
          ](_.c), _.b),
        "__tests__/tags/my-button.marko_0_onClick 2"
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
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```