# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <div>
      Hoist from custom tag
    </div>
    <!--M_*4 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "ClosureScopes:1": _.e = new Set
        }, 1, _.b = {
          setHtml: _.c = {}
        }, _.c], _.a.$hoisted_setHtml = _._[
          "__tests__/template.marko_0_$hoisted_setHtml/hoist"
          ](_.a), _.b.setHtml = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.c), (_.e).add(_.b), _.d),
        "__tests__/template.marko_0_$hoisted_setHtml",
        1
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