# Write
```html
  <div></div><!--M_*1 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={},_.a={}],_.a.el=_._["__tests__/template.marko_0_#div"](_.c),_.b),"__tests__/tags/hello-setter.marko_0_el 2"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {}, _.a = {}], _.a.el = _._[
          "__tests__/template.marko_0_#div"
          ](_.c), _.b),
        "__tests__/tags/hello-setter.marko_0_el 2"
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
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```