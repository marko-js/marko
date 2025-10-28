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
      M._.r = [_ =&gt; (_.p = [0, _.a = {
            "ClosureScopes:1": _.q = new Set,
            "ClosureScopes:2": _.s = new Set,
            "ClosureScopes:4": _.w = new Set
          }, 1, _.b = {
            setHtml: _.c = {}
          }, _.c, _.d = {
            setHtml: _.e = {}
          }, _.e, 1, _.t = {
            "ClosureScopes:3": _.r = new Set
          }, 1, _.f = {
            setHtml2: _.g = {}
          }, _.g, _.h = {
            setHtml2: _.i = {}
          }, _.i, _.v = {
            "ClosureScopes:3": _.u = new Set
          }, 1, _.j = {
            setHtml2: _.k = {}
          }, _.k, _.l = {
            setHtml2: _.m = {}
          }, _.m, 1, _.n = {
            setHtml3: _.o = {}
          }, _.o], _.a.$hoisted_setHtml = _._[
            "__tests__/template.marko_0_$hoisted_setHtml/hoist"
            ](_.a), _.b.setHtml = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.c), _.d.setHtml = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.e), _.f.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.g), _.h.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.i), _.j.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.k), _.l.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.m), _.n.setHtml3 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.o), (_.q).add(_.b), _.q.add(_.d), (_.r).add(_.f), _.r.add(_
          .h), (_.s).add(_.t), (_.u).add(_.j), _.u.add(_.l), _.s.add(_.v), (_
            .w).add(_.n), _.p),
        "__tests__/template.marko_0",
        1,
        "__tests__/template.marko_0_$hoisted_setHtml",
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
INSERT html/body/section/div/#text
INSERT html/body/div0/#text
INSERT html/body/div1/#text
```