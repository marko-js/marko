# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <div>
      Hoist from custom tag
    </div>
    <!--M_*4 #div/0-->
    <div>
      Hoist from custom tag
    </div>
    <!--M_*6 #div/0-->
    <div>
      Hoist from dynamic tag
    </div>
    <!--M_*11 #div/0-->
    <div />
    <!--M_*13 #div/0-->
    <div />
    <!--M_*17 #div/0-->
    <div />
    <!--M_*19 #div/0-->
    <section>
      <div>
        Hoist from dynamic tag
      </div>
      <!--M_*22 #div/0-->
    </section>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.o = [0,
          {
            "ClosureScopes:1": _.p = new Set,
            "ClosureScopes:2": _.r = new Set,
            "ClosureScopes:4": _.v = new Set
          }, 1, _.a = {
            setHtml: _.b = {}
          }, _.b, _.c = {
            setHtml: _.d = {}
          }, _.d, 1, _.s = {
            "ClosureScopes:3": _.q = new Set
          }, 1, _.e = {
            setHtml2: _.f = {}
          }, _.f, _.g = {
            setHtml2: _.h = {}
          }, _.h, _.u = {
            "ClosureScopes:3": _.t = new Set
          }, 1, _.i = {
            setHtml2: _.j = {}
          }, _.j, _.k = {
            setHtml2: _.l = {}
          }, _.l, 1, _.m = {
            setHtml3: _.n = {}
          }, _.n], _.a.setHtml = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.b), _.c.setHtml = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.d), _.e.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.f), _.g.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.h), _.i.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.j), _.k.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.l), _.m.setHtml3 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.n), (_.p).add(_.a), _.p.add(_.c), (_.q).add(_.e), _.q.add(_
          .g), (_.r).add(_.s), (_.t).add(_.i), _.t.add(_.k), _.r.add(_.u), (_
            .v).add(_.m), _.o),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div0/#text
INSERT html/body/div1/#text
INSERT html/body/div2/#text
INSERT html/body/section/div/#text
```