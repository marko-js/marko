# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <div />
    <!--M_*3 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          setHtml: _.c = {}
        }, _.b = {}, _.c], _.b.input_value = _._[
          "__tests__/template.marko_0_setHtml/hoist"
          ](_.a), _.a.setHtml = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.c), _.d),
        "__tests__/tags/thing.marko_0_input_value 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```
