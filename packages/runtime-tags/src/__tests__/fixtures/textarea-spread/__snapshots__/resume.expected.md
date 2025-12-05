# Render `{"value":"foo"}`

```html
<html>
  <head />
  <body>
    <textarea>
      foo
    </textarea>
    <!--M_*1 #textarea/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          input:
          {
            value: "foo"
          }
        }]),
        "__tests__/template.marko_0_input 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```
