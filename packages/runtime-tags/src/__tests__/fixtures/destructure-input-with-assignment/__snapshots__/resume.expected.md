# Render
```html
<html>
  <head />
  <body>
    <div>
      1
      <!--M_*3 #text/0-->
    </div>
    <!--M_*2 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          value: 1,
          "ClosureScopes:value": _.f = new Set
        }, _.b = {
          "BranchScopes:#div/0": _.d = {
            _: _.a,
            "ClosureSignalIndex:value": 0
          },
          "ConditionalRenderer:#div/0": "__tests__/template.marko_1_content",
          rest: _.c = {}
        }, _.d], _.b.$valueChange = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.c.content = _._[
          "__tests__/template.marko_1_content"
          ](_.a), (_.f).add(_.d), _.e),
        "__tests__/tags/child.marko_0_rest 2 __tests__/tags/child.marko_0_$valueChange 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render ASYNC
```html
<html>
  <head />
  <body>
    <div>
      2
      <!--M_*3 #text/0-->
    </div>
    <!--M_*2 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          value: 1,
          "ClosureScopes:value": _.f = new Set
        }, _.b = {
          "BranchScopes:#div/0": _.d = {
            _: _.a,
            "ClosureSignalIndex:value": 0
          },
          "ConditionalRenderer:#div/0": "__tests__/template.marko_1_content",
          rest: _.c = {}
        }, _.d], _.b.$valueChange = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.c.content = _._[
          "__tests__/template.marko_1_content"
          ](_.a), (_.f).add(_.d), _.e),
        "__tests__/tags/child.marko_0_rest 2 __tests__/tags/child.marko_0_$valueChange 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text "1" => "2"
```