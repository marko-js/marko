# Write
```html
  <div></div><!--M_*3 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.b={setHtml:_._["__tests__/tags/child.marko_0/_return"](_.a={}),"#childScope/0":_.c={}},_.c,_.a],_.c.input_value=_._["__tests__/template.marko_0_$hoisted_setHtml/hoist"](_.b),_.d),"__tests__/tags/thing.marko_0_input_value",2];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*3 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.b = {
          setHtml: _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.a = {}),
          "#childScope/0": _.c = {}
        }, _.c, _.a], _.c.input_value = _._[
          "__tests__/template.marko_0_$hoisted_setHtml/hoist"
          ](_.b), _.d),
        "__tests__/tags/thing.marko_0_input_value",
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
INSERT html/body/div
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```