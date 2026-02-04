# Render `{"show":true}`

```html
<!--M_[-->
<!--M_]2 #text/0 3-->
<html>
  <head />
  <body>
    <!--M_[-->
    <div />
    <!--M_*2 #div/1-->
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
          "#scopeOffset/1": 4,
          setHtml: _.b = {
            "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
          },
          "ClosureScopes:setHtml": _.d = new Set
        }, _.b, _.e = {
          _: _.a,
          "ClosureSignalIndex:setHtml": 0
        }], _.a.setHtml = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.b), _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_setHtml/var"
          ](_.a), (_.d).add(_.e), _.c),
        "__tests__/template.marko_1_setHtml 3"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before #comment0
INSERT html/body/#comment0
INSERT html/body/#text
```