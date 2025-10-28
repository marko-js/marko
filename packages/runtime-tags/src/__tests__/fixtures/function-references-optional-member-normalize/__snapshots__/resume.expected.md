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
      M._.r = [_ =&gt; (_.d = [0, _.e = {
          a: _.a = {},
          b: _.b = {},
          c: _.c = {}
        }], _.a.bar = _._[
          "__tests__/template.marko_0/a"
          ](_.e), _.b.baz = _._[
          "__tests__/template.marko_0/b"
          ](_.e), _.c.baz = _._[
          "__tests__/template.marko_0/c"
          ](_.e), _.d),
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