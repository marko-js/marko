# Render
```html
<html>
  <head />
  <body>
    <div>
      missing a
    </div>
    <!--M_*1 #div/0-->
    <div>
      missing b
    </div>
    <!--M_*1 #div/1-->
    <div>
      missing c
    </div>
    <!--M_*1 #div/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          a: _.b = {},
          b: _.c = {},
          c: _.d = {}
        }], _.b.bar = _._[
          "__tests__/template.marko_0/a"
          ](_.a), _.c.baz = _._[
          "__tests__/template.marko_0/b"
          ](_.a), _.d.baz = _._[
          "__tests__/template.marko_0/c"
          ](_.a), _.e),
        "__tests__/template.marko_0_c",
        1,
        "__tests__/template.marko_0_b",
        1,
        "__tests__/template.marko_0_a",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div2/#text
INSERT html/body/div1/#text
INSERT html/body/div0/#text
```