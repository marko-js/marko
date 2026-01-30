# Render `{"show":true}`

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
      M._.r = [_ =&gt; (_.c = [0, _.a = {},
        {
          _: _.a
        },
        {
          "#scopeOffset/1": 5,
          input: _.b = {
            foo: "bar"
          },
          x: "bar"
        }], _.b.output = _._[
          "__tests__/template.marko_0_#div"
          ](_.a), _.c),
        "__tests__/tags/child.marko_0_input_x 3"
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