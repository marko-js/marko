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
          }, 1, _.c = {
            "ConditionalScope:#text/0": _.b = {},
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 5
          }, _.b, 1, _.e = {
            "ConditionalScope:#text/0": _.d = {},
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 8
          }, _.d, 2, _.t = {
            "ClosureScopes:3": _.r = new Set
          }, 1, _.g = {
            "ConditionalScope:#text/0": _.f = {},
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 14
          }, _.f, 1, _.i = {
            "ConditionalScope:#text/0": _.h = {},
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 17
          }, _.h, 1, _.v = {
            "ClosureScopes:3": _.u = new Set
          }, 1, _.k = {
            "ConditionalScope:#text/0": _.j = {},
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 22
          }, _.j, 1, _.m = {
            "ConditionalScope:#text/0": _.l = {},
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 25
          }, _.l, 2, _.o = {
            "ConditionalScope:#text/0": _.n = {},
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 29
          }, _.n], _.a.$hoisted_setHtml = _._[
            "__tests__/template.marko_0_$hoisted_setHtml/hoist"
            ](_.a), _.c.setHtml = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.b), _.b["#TagVariable"] = _._[
            "__tests__/template.marko_1_setHtml/var"
            ](_.c), _.e.setHtml = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.d), _.d["#TagVariable"] = _._[
            "__tests__/template.marko_1_setHtml/var"
            ](_.e), _.g.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.f), _.f["#TagVariable"] = _._[
            "__tests__/template.marko_3_setHtml2/var"
            ](_.g), _.i.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.h), _.h["#TagVariable"] = _._[
            "__tests__/template.marko_3_setHtml2/var"
            ](_.i), _.k.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.j), _.j["#TagVariable"] = _._[
            "__tests__/template.marko_3_setHtml2/var"
            ](_.k), _.m.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.l), _.l["#TagVariable"] = _._[
            "__tests__/template.marko_3_setHtml2/var"
            ](_.m), _.o.setHtml3 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.n), _.n["#TagVariable"] = _._[
            "__tests__/template.marko_4_setHtml3/var"
            ](_.o), (_.q).add(_.c), _.q.add(_.e), (_.r).add(_.g), _.r.add(_
          .i), (_.s).add(_.t), (_.u).add(_.k), _.u.add(_.m), _.s.add(_.v), (_
            .w).add(_.o), _.p),
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