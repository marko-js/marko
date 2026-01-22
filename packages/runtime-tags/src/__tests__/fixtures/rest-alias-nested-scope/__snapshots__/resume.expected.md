# Render `{"value":{"foo":"bar","class":"test"}}`

```html
<html>
  <head />
  <body>
    -- bar
    <span
      class="test"
    />
    <!--M_*2 #span/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          rest:
          {
            class: "test"
          }
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_1_rest 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```
