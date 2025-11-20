# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <div>
      Hello world
    </div>
    <!--M_*4 #div/0-->
    <div>
      Hello world
    </div>
    <!--M_*7 #div/0-->
    <div>
      Hello world
    </div>
    <!--M_*9 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.j = [0, _.i = {
          "BranchScopes:#text/0": _.e = {
            "BranchScopes:#text/0": _.a = {
              setHtml: _.f = {}
            }
          },
          "BranchScopes:#text/2": _.b = {
            setHtml2: _.g = {}
          },
          "BranchScopes:#text/3": _.c = {
            setHtml3: _.h = {}
          },
          "#childScope/1": _.d = {}
        }, _.e, _.a, _.f, _.d, _.b, _.g, _.c, _.h,
        {
          _: _.i
        }], _.d.input_value = _._[
          "__tests__/template.marko_0_$hoisted_setHtml/hoist"
          ](_.i), _.a.setHtml = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.f), _.b.setHtml2 = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.g), _.c.setHtml3 = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.h), _.j),
        "__tests__/tags/thing.marko_0_input_value 5 __tests__/template.marko_5 10 __tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div2/#text
INSERT html/body/div0/#text
INSERT html/body/div1/#text
```