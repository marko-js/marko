# Write
```html
  <div></div><!--M_*2 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.a={},{"BranchScopes:#div/0":_.c={_:_.a},"ConditionalRenderer:#div/0":"__tests__/template.marko_1_content",input:_.b={}},_.c],_.b.content=_._["__tests__/template.marko_1_content"](_.a),_.d),"__tests__/template.marko_3_input 2"];M._.w()</script>
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
      M._.r = [_ =&gt; (_.d = [0, _.a = {},
        {
          "BranchScopes:#div/0": _.c = {
            _: _.a
          },
          "ConditionalRenderer:#div/0": "__tests__/template.marko_1_content",
          input: _.b = {}
        }, _.c], _.b.content = _._[
          "__tests__/template.marko_1_content"
          ](_.a), _.d),
        "__tests__/template.marko_3_input 2"
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