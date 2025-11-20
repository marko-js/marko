# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <!--M_[-->
    <div>
      Hoist from custom tag
    </div>
    <!--M_*4 #div/0-->
    <!--M_]3 #text/0 4-->
    <!--M_[-->
    <div>
      Hoist from custom tag
    </div>
    <!--M_*7 #div/0-->
    <!--M_]6 #text/0 7-->
    <!--M_[-->
    <div>
      Hoist from dynamic tag
    </div>
    <!--M_*13 #div/0-->
    <!--M_]12 #text/0 13-->
    <!--M_[-->
    <div />
    <!--M_*16 #div/0-->
    <!--M_]15 #text/0 16-->
    <!--M_[-->
    <div />
    <!--M_*21 #div/0-->
    <!--M_]20 #text/0 21-->
    <!--M_[-->
    <div />
    <!--M_*24 #div/0-->
    <!--M_]23 #text/0 24-->
    <section>
      <!--M_[-->
      <div>
        Hoist from dynamic tag
      </div>
      <!--M_*28 #div/0-->
      <!--M_]27 #text/0 28-->
    </section>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.p = [0, _.a = {
            "ClosureScopes:1": _.q = new Set,
            "ClosureScopes:2": _.s = new Set,
            "ClosureScopes:4": _.w = new Set
          }, 1, _.b = {
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 5,
            setHtml: _.c = {}
          }, _.c, 1, _.d = {
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 8,
            setHtml: _.e = {}
          }, _.e, 2, _.t = {
            "ClosureScopes:3": _.r = new Set
          }, 1, _.f = {
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 14,
            setHtml2: _.g = {}
          }, _.g, 1, _.h = {
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 17,
            setHtml2: _.i = {}
          }, _.i, 1, _.v = {
            "ClosureScopes:3": _.u = new Set
          }, 1, _.j = {
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 22,
            setHtml2: _.k = {}
          }, _.k, 1, _.l = {
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 25,
            setHtml2: _.m = {}
          }, _.m, 2, _.n = {
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 29,
            setHtml3: _.o = {}
          }, _.o], _.a.$hoisted_setHtml = _._[
            "__tests__/template.marko_0_$hoisted_setHtml/hoist"
            ](_.a), _.b.setHtml = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.c), _.c["#TagVariable"] = _._[
            "__tests__/template.marko_1_setHtml/var"
            ](_.b), _.d.setHtml = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.e), _.e["#TagVariable"] = _._[
            "__tests__/template.marko_1_setHtml/var"
            ](_.d), _.f.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.g), _.g["#TagVariable"] = _._[
            "__tests__/template.marko_3_setHtml2/var"
            ](_.f), _.h.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.i), _.i["#TagVariable"] = _._[
            "__tests__/template.marko_3_setHtml2/var"
            ](_.h), _.j.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.k), _.k["#TagVariable"] = _._[
            "__tests__/template.marko_3_setHtml2/var"
            ](_.j), _.l.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.m), _.m["#TagVariable"] = _._[
            "__tests__/template.marko_3_setHtml2/var"
            ](_.l), _.n.setHtml3 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.o), _.o["#TagVariable"] = _._[
            "__tests__/template.marko_4_setHtml3/var"
            ](_.n), (_.q).add(_.b), _.q.add(_.d), (_.r).add(_.f), _.r.add(_
          .h), (_.s).add(_.t), (_.u).add(_.j), _.u.add(_.l), _.s.add(_.v), (_
            .w).add(_.n), _.p),
        "__tests__/template.marko_0 1 __tests__/template.marko_0_$hoisted_setHtml 1"
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
INSERT html/body/#text3
INSERT html/body/#text4
INSERT html/body/#text5
INSERT html/body/section/#text
INSERT html/body/div2/#text
INSERT html/body/section/div/#text
INSERT html/body/div0/#text
INSERT html/body/div1/#text
```