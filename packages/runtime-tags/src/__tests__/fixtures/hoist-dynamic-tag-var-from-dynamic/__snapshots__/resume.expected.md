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
          "ConditionalScope:#text/0": _.c = {},
          "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
          "#scopeOffset/1": 5
        }, _.c, 1, _.d = {
          "ConditionalScope:#text/0": _.e = {},
          "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
          "#scopeOffset/1": 8
        }, _.e, 2, _.t = {
          "ClosureScopes:3": _.r = new Set
        }, 1, _.f = {
          "ConditionalScope:#text/0": _.g = {},
          "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
          "#scopeOffset/1": 14
        }, _.g, 1, _.h = {
          "ConditionalScope:#text/0": _.i = {},
          "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
          "#scopeOffset/1": 17
        }, _.i, 1, _.v = {
          "ClosureScopes:3": _.u = new Set
        }, 1, _.j = {
          "ConditionalScope:#text/0": _.k = {},
          "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
          "#scopeOffset/1": 22
        }, _.k, 1, _.l = {
          "ConditionalScope:#text/0": _.m = {},
          "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
          "#scopeOffset/1": 25
        }, _.m, 2, _.n = {
          "ConditionalScope:#text/0": _.o = {},
          "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
          "#scopeOffset/1": 29
        }, _.o], _.a.$hoisted_setHtml = _._[
          "__tests__/template.marko_0_$hoisted_setHtml/hoist"
          ](_.a), _.c["#TagVariable"] = _._[
          "__tests__/template.marko_1_setHtml/var"
          ](_.b), _.b.setHtml = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.c), _.e["#TagVariable"] = _._[
          "__tests__/template.marko_1_setHtml/var"
          ](_.d), _.d.setHtml = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.e), _.g["#TagVariable"] = _._[
          "__tests__/template.marko_3_setHtml2/var"
          ](_.f), _.f.setHtml2 = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.g), _.i["#TagVariable"] = _._[
          "__tests__/template.marko_3_setHtml2/var"
          ](_.h), _.h.setHtml2 = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.i), _.k["#TagVariable"] = _._[
          "__tests__/template.marko_3_setHtml2/var"
          ](_.j), _.j.setHtml2 = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.k), _.m["#TagVariable"] = _._[
          "__tests__/template.marko_3_setHtml2/var"
          ](_.l), _.l.setHtml2 = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.m), _.o["#TagVariable"] = _._[
          "__tests__/template.marko_4_setHtml3/var"
          ](_.n), _.n.setHtml3 = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.o), (_.q).add(_.b), (_.q).add(_.d), (_.r).add(_.f), (_.r).add(
          _.h), (_.s).add(_.t), (_.u).add(_.j), (_.u).add(_.l), (_.s).add(_
          .v), (_.w).add(_.n), _.p),
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