# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <span>
      Hoist from custom tag
    </span>
    <!--M_*3 #span/0-->
    <span>
      Hoist from custom tag
    </span>
    <!--M_*4 #span/0-->
    <div
      class="inner outer"
    />
    <!--M_*8 #div/0-->
    <div
      class="inner outer"
    />
    <!--M_*9 #div/0-->
    <div
      class="inner outer"
    />
    <!--M_*12 #div/0-->
    <div
      class="inner outer"
    />
    <!--M_*13 #div/0-->
    <section>
      <p>
        Hoist from dynamic tag
      </p>
      <!--M_*15 #p/0-->
    </section>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
            "ClosureScopes:1": _.c = new Set,
            "ClosureScopes:2": _.i = new Set,
            "ClosureScopes:4": _.o = new Set
          }, 1, _.d = {}, _.e = {}, 1, _.j = {
            _: _.a,
            "ClosureScopes:3": _.f = new Set
          }, 1, _.g = {}, _.h = {}, _.n = {
            _: _.a,
            "ClosureScopes:3": _.k = new Set
          }, 1, _.l = {}, _.m = {}, 1, _.p = {}], (_.c).add(_.d), _.c.add(_
          .e), (_.f).add(_.g), _.f.add(_.h), (_.i).add(_.j), (_.k).add(_.l), _
          .k.add(_.m), _.i.add(_.n), (_.o).add(_.p), _.b),
        "__tests__/template.marko_2 6 10 __tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div0[class] null => "inner outer"
UPDATE html/body/div1[class] null => "inner outer"
UPDATE html/body/div2[class] null => "inner outer"
UPDATE html/body/div3[class] null => "inner outer"
INSERT html/body/span0/#text
INSERT html/body/span1/#text
UPDATE html/body/div0[class] "inner" => "inner outer"
UPDATE html/body/div1[class] "inner" => "inner outer"
UPDATE html/body/div2[class] "inner" => "inner outer"
UPDATE html/body/div3[class] "inner" => "inner outer"
INSERT html/body/section/p/#text
```