# Render
```html
<html>
  <head />
  <body>
    <div>
      1
    </div>
    <!--M_*2 #div/0-->
    <div>
      content
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          value: 1
        },
        {
          rest:
          {}
        },
        {
          _: _.a
        }]),
        "__tests__/tags/child.marko_0_rest 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```
