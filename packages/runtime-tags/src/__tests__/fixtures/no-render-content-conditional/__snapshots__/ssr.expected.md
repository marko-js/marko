# Write
```html
  <div></div><!--M_*1 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={},{"#scopeOffset/1":4,input:_.a={foo:"bar"},x:"bar"}],_.a.output=_._["__tests__/template.marko_0/#div"](_.c),_.b),"__tests__/tags/child.marko_0_input_x",2];M._.w()</script>
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
      M._.r = [_ =&gt; (_.b = [0, _.c = {},
        {
          "#scopeOffset/1": 4,
          input: _.a = {
            foo: "bar"
          },
          x: "bar"
        }], _.a.output = _._[
          "__tests__/template.marko_0/#div"
          ](_.c), _.b),
        "__tests__/tags/child.marko_0_input_x",
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