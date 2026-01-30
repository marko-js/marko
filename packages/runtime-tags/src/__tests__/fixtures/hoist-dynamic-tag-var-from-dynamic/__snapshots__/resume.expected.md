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
      M._.r = [_ =&gt; (_.o = [0,
          {
            "ClosureScopes:1": _.p = new Set,
            "ClosureScopes:2": _.r = new Set,
            "ClosureScopes:4": _.v = new Set
          }, 1, _.a = {
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 5,
            setHtml: _.b = {}
          }, _.b, 1, _.c = {
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 8,
            setHtml: _.d = {}
          }, _.d, 2, _.s = {
            "ClosureScopes:3": _.q = new Set
          }, 1, _.e = {
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 14,
            setHtml2: _.f = {}
          }, _.f, 1, _.g = {
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 17,
            setHtml2: _.h = {}
          }, _.h, 1, _.u = {
            "ClosureScopes:3": _.t = new Set
          }, 1, _.i = {
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 22,
            setHtml2: _.j = {}
          }, _.j, 1, _.k = {
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 25,
            setHtml2: _.l = {}
          }, _.l, 2, _.m = {
            "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
            "#scopeOffset/1": 29,
            setHtml3: _.n = {}
          }, _.n], _.a.setHtml = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.b), _.b["#TagVariable"] = _._[
            "__tests__/template.marko_1_setHtml/var"
            ](_.a), _.c.setHtml = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.d), _.d["#TagVariable"] = _._[
            "__tests__/template.marko_1_setHtml/var"
            ](_.c), _.e.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.f), _.f["#TagVariable"] = _._[
            "__tests__/template.marko_3_setHtml2/var"
            ](_.e), _.g.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.h), _.h["#TagVariable"] = _._[
            "__tests__/template.marko_3_setHtml2/var"
            ](_.g), _.i.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.j), _.j["#TagVariable"] = _._[
            "__tests__/template.marko_3_setHtml2/var"
            ](_.i), _.k.setHtml2 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.l), _.l["#TagVariable"] = _._[
            "__tests__/template.marko_3_setHtml2/var"
            ](_.k), _.m.setHtml3 = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.n), _.n["#TagVariable"] = _._[
            "__tests__/template.marko_4_setHtml3/var"
            ](_.m), (_.p).add(_.a), _.p.add(_.c), (_.q).add(_.e), _.q.add(_
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
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
INSERT html/body/#text0
INSERT html/body/#text1
INSERT html/body/#text2
INSERT html/body/#text3
INSERT html/body/#text4
INSERT html/body/#text5
INSERT html/body/section/#text
INSERT html/body/div0/#text
INSERT html/body/div1/#text
INSERT html/body/div2/#text
INSERT html/body/section/div/#text
```