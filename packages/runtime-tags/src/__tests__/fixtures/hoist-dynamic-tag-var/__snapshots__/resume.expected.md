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
      M._.r = [_ =&gt; (_.j = [0, _.i = {
          "BranchScopes:#text/0": _.g = {
            "BranchScopes:#text/0": _.a = {
              "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
              "#scopeOffset/1": 5,
              setHtml: _.b = {}
            }
          },
          "BranchScopes:#text/2": _.c = {
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 9,
            setHtml2: _.d = {}
          },
          "BranchScopes:#text/3": _.e = {
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 12,
            setHtml3: _.f = {}
          }
        }, _.g, _.a, _.b, 1, _.h = {}, _.c, _.d, 1, _.e, _.f, 1,
        {
          _: _.i
        }], _.h.input_value = _._[
          "__tests__/template.marko_0_setHtml/hoist"
          ](_.i), _.a.setHtml = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.b), _.b["#TagVariable"] = _._[
          "__tests__/template.marko_2_setHtml/var"
          ](_.a), _.c.setHtml2 = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.d), _.d["#TagVariable"] = _._[
          "__tests__/template.marko_3_setHtml2/var"
          ](_.c), _.e.setHtml3 = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.f), _.f["#TagVariable"] = _._[
          "__tests__/template.marko_4_setHtml3/var"
          ](_.e), _.j),
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