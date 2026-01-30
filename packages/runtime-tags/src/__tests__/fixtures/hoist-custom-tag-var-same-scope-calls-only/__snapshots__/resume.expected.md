# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <div
      class="child"
    >
      works
    </div>
    <!--M_*3 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          api: _.c = {}
        },
        {
          input: _.b = {}
        }, _.c], _.b.action = _._[
          "__tests__/template.marko_0/action"
          ](_.a), _.a.api = _._[
          "__tests__/tags/source.marko_0/_return"
          ](_.c), _.d),
        "__tests__/tags/child.marko_0_input 2 __tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[class] null => "child"
INSERT html/body/div/#text
```