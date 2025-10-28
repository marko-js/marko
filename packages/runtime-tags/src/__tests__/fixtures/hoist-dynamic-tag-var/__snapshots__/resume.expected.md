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
          "ConditionalScope:#text/0": _.h = {
            "ConditionalScope:#text/0": _.b = {
              "ConditionalScope:#text/0": _.a = {},
              "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
              "#scopeOffset/1": 5
            }
          },
          "ConditionalScope:#text/2": _.d = {
            "ConditionalScope:#text/0": _.c = {},
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 9
          },
          "ConditionalScope:#text/3": _.f = {
            "ConditionalScope:#text/0": _.e = {},
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 12
          },
          "#childScope/1": _.g = {}
        }, _.h, _.b, _.a, 1, _.g, _.d, _.c, 1, _.f, _.e, 1,
        {
          _: _.i
        }], _.g.input_value = _._[
          "__tests__/template.marko_0_$hoisted_setHtml/hoist"
          ](_.i), _.b.setHtml = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.a), _.a["#TagVariable"] = _._[
          "__tests__/template.marko_2_setHtml/var"
          ](_.b), _.d.setHtml2 = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.c), _.c["#TagVariable"] = _._[
          "__tests__/template.marko_3_setHtml2/var"
          ](_.d), _.f.setHtml3 = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.e), _.e["#TagVariable"] = _._[
          "__tests__/template.marko_4_setHtml3/var"
          ](_.f), _.j),
        "__tests__/tags/thing.marko_0_input_value",
        6,
        "__tests__/template.marko_5",
        13,
        "__tests__/template.marko_0",
        1
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