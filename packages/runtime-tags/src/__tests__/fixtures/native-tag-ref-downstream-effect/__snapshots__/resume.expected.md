# Render
```html
<html>
  <head />
  <body>
    <div>
      hello
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {},
        {
          _: _.a
        }]),
        "__tests__/template.marko_1 2"
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