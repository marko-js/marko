# Render `{"a":"a","b":"b"}`

```html
<html>
  <head />
  <body>
    <div>
      a
    </div>
    <div>
      b
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 1,
        {
          input_a: "a"
        }]),
        "__tests__/template.marko_1_input_a",
        2,
        "__tests__/template.marko_1_a",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```
