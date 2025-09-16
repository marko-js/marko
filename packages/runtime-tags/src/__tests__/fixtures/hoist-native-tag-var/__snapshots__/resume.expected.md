# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <div
      class="child0 child1"
    >
      Hello World
    </div>
    <!--M_*3 #div/0-->
    <hr />
    <div>
      Hello World
    </div>
    <!--M_*6 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.g = [0, _.a = {
          "ConditionalScope:#text/0": _.c = {
            "ConditionalScope:#text/0": _.d = {}
          },
          "ConditionalScope:#text/2": _.f = {},
          "#childScope/1": _.e = {
            input: _.b = {}
          }
        }, _.c, _.d,
        {
          input:
          {
            value: _._[
              "__tests__/template.marko_2/#div"
              ](_.d)
          }
        }, _.e, _.f], _.b.value = _._[
          "__tests__/template.marko_0_$hoisted_el/hoist"
          ](_.a), _.g),
        "__tests__/tags/child.marko_0_input",
        4, 5,
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
UPDATE html/body/div0[class] null => "child0 child1"
UPDATE html/body/div0[class] "child0" => "child0 child1"
INSERT html/body/div0/#text
INSERT html/body/div1/#text
```