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
      M._.r = [_ =&gt; (_.d = [0, _.a = {
            "ClosureScopes:1": _.e = new Set,
            "ClosureScopes:2": _.k = new Set,
            "ClosureScopes:4": _.o = new Set
          }, 1, _.f = {}, _.g = {}, 1, _.b = {
            "ClosureScopes:3": _.h = new Set
          }, 1, _.i = {}, _.j = {}, _.c = {
            "ClosureScopes:3": _.l = new Set
          }, 1, _.m = {}, _.n = {}, 1, _.p = {}], _.a.$hoisted_el = _._[
            "__tests__/template.marko_0_$hoisted_el/hoist"
            ](_.a), _.a.$hoisted_el3 = _._[
            "__tests__/template.marko_0_$hoisted_el3/hoist"
            ](_.a), _.b.$hoisted_el2 = _._[
            "__tests__/template.marko_2_$hoisted_el2/hoist"
            ](_.b), _.c.$hoisted_el2 = _._[
            "__tests__/template.marko_2_$hoisted_el2/hoist"
            ](_.c), (_.e).add(_.f), _.e.add(_.g), (_.h).add(_.i), _.h.add(_
          .j), (_.k).add(_.b), (_.l).add(_.m), _.l.add(_.n), _.k.add(_.c), (_
            .o).add(_.p), _.d),
        "__tests__/template.marko_2_$hoisted_el2",
        6, 10,
        "__tests__/template.marko_0",
        1,
        "__tests__/template.marko_0_$hoisted_el3",
        1,
        "__tests__/template.marko_0_$hoisted_el",
        1
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
INSERT html/body/section/p/#text
UPDATE html/body/div0[class] "inner" => "inner outer"
UPDATE html/body/div1[class] "inner" => "inner outer"
UPDATE html/body/div2[class] "inner" => "inner outer"
UPDATE html/body/div3[class] "inner" => "inner outer"
INSERT html/body/span0/#text
INSERT html/body/span1/#text
```