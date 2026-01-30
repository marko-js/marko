# Write
```html
  <div></div><!--M_*2 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={x:_._["__tests__/tags/source.marko_0/_return"]},{input:_.a={}}],_.a.y=_._["__tests__/template.marko_0_x/hoist"](_.c),_.b),"__tests__/tags/child.marko_0_input 2"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*2 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          x: _._[
            "__tests__/tags/source.marko_0/_return"
            ]
        },
        {
          input: _.a = {}
        }], _.a.y = _._[
          "__tests__/template.marko_0_x/hoist"
          ](_.c), _.b),
        "__tests__/tags/child.marko_0_input 2"
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