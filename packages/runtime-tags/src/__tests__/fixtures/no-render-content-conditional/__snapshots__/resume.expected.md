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
      M._.r = [_ =&gt; (_.b = [0, _.a = {},
        {
          "#scopeOffset/1": 4,
          input:
          {
            foo: "bar",
            output: _._[
              "__tests__/template.marko_0/#div"
              ](_.a)
          },
          x: "bar"
        }]),
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
INSERT html/body/div/#text
```