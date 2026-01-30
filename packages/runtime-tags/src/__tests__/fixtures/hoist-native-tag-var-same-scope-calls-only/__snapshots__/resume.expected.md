# Render
```html
<html>
  <head />
  <body>
    <div
      class="child1 child2"
    >
      works
    </div>
    <!--M_*1 #div/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {},
        {
          input: _.a = {}
        },
        {
          input: _.b = {}
        }], _.a.action = _._[
          "__tests__/template.marko_0/action"
          ](_.d), _.b.action = _._[
          "__tests__/template.marko_0/action2"
          ](_.d), _.c),
        "__tests__/tags/child.marko_0_input 2 3 __tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[class] null => "child1 child2"
UPDATE html/body/div[class] "child1" => "child1 child2"
INSERT html/body/div/#text
```