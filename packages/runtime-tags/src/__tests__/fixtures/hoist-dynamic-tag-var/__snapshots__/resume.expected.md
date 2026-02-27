# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <!--M_[-->
    <div>
      Hello world
    </div>
    <!--M_*4 #div/0-->
    <!--M_]3 #text/0 4-->
    <!--M_[-->
    <div>
      Hello world
    </div>
    <!--M_*8 #div/0-->
    <!--M_]7 #text/0 8-->
    <!--M_[-->
    <div>
      Hello world
    </div>
    <!--M_*11 #div/0-->
    <!--M_]10 #text/0 11-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.k = [0, _.j = {
          "BranchScopes:#text/0": _.h = {
            "BranchScopes:#text/0": _.a = {
              "ConditionalRenderer:#text/0": _.c =
                "__tests__/tags/child.marko",
              "#scopeOffset/1": 5,
              setHtml: _.b = {}
            }
          },
          "BranchScopes:#text/2": _.d = {
            "ConditionalRenderer:#text/0": _.c,
            "#scopeOffset/1": 9,
            setHtml2: _.e = {}
          },
          "BranchScopes:#text/3": _.f = {
            "ConditionalRenderer:#text/0": _.c,
            "#scopeOffset/1": 12,
            setHtml3: _.g = {}
          }
        }, _.h, _.a, _.b, 1, _.i = {}, _.d, _.e, 1, _.f, _.g, 1,
        {
          _: _.j
        }], _.i.input_value = _._[
          "__tests__/template.marko_0_setHtml/hoist"
          ](_.j), _.a.setHtml = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.b), _.b["#TagVariable"] = _._[
          "__tests__/template.marko_2_setHtml/var"
          ](_.a), _.d.setHtml2 = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.e), _.e["#TagVariable"] = _._[
          "__tests__/template.marko_3_setHtml2/var"
          ](_.d), _.f.setHtml3 = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.g), _.g["#TagVariable"] = _._[
          "__tests__/template.marko_4_setHtml3/var"
          ](_.f), _.k),
        "__tests__/tags/thing.marko_0_input_value 6 __tests__/template.marko_5 13 __tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
INSERT html/body/#text0
INSERT html/body/#text1
INSERT html/body/#text2
INSERT html/body/div2/#text
INSERT html/body/div0/#text
INSERT html/body/div1/#text
```