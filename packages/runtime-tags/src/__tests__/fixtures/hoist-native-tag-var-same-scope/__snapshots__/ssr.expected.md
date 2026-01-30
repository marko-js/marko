# Write
```html
  <div></div><!--M_*1 #div/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.d={},{input:_.a={}},{input:_.b={}}],_.a.value=_.b.value=_._["__tests__/template.marko_0_#div/hoist"](_.d),_.c),"__tests__/tags/child.marko_0_input 2 3"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*1 #div/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {},
        {
          input: _.a = {}
        },
        {
          input: _.b = {}
        }], _.a.value = _.b.value = _._[
          "__tests__/template.marko_0_#div/hoist"
          ](_.d), _.c),
        "__tests__/tags/child.marko_0_input 2 3"
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