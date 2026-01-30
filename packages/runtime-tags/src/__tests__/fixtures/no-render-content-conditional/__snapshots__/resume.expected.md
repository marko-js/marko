# Render `{"foo":"bar"}`

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
      M._.r = [_ =&gt; (_.b = [0, _.c = {},
        {
          "#scopeOffset/1": 4,
          input: _.a = {
            foo: "bar"
          },
          x: "bar"
        }], _.a.output = _._[
          "__tests__/template.marko_0_#div"
          ](_.c), _.b),
        "__tests__/tags/child.marko_0_input_x 2"
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