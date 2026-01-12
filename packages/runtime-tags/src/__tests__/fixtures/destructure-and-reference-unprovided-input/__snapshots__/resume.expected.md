# Render
```html
<html>
  <head />
  <body>
    <div
      class="foo"
    >
      1
    </div>
    <!--M_*2 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 1,
        {
          rest:
          {}
        }]),
        "__tests__/tags/child.marko_0_rest 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```
