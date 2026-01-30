# Render
```html
<html>
  <head />
  <body>
    <div>
      1
    </div>
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
INSERT html/body/div/#text
```