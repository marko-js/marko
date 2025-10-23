# Render
```html
<html>
  <head />
  <body>
    <div>
      bar
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.b = {
          foo: _.a = {
            bar: "bar"
          },
          baz: _.c = {
            foo: _.a
          }
        }], _.c.bar = _._[
          "__tests__/template.marko_0/baz"
          ](_.b), _.d),
        "__tests__/template.marko_0_baz",
        1
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