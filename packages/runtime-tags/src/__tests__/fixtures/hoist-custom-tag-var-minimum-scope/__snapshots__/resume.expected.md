# Render
```html
<html>
  <head />
  <body>
    <pre
      id="root"
    >
      9; 0,0
	
    </pre>
    <!--M_*1 #pre/0-->
    <pre
      id="outer"
    >
      3; 0,0
	3; 1,0
	3; 2,0
	
    </pre>
    <!--M_*1 #pre/1-->
    <pre
      id="inner"
    >
      1; 0,0
	1; 0,1
	1; 0,2
	1; 1,0
	1; 1,1
	1; 1,2
	1; 2,0
	1; 2,1
	1; 2,2
	
    </pre>
    <!--M_*1 #pre/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.n = [0, _.e = {
              "BranchScopes:#text/3": [_.b = {
                "BranchScopes:#text/0": [_.a = {
                  ref: _.o = {
                    input_value: "0,0"
                  }
                }, _.c = {
                  ref: _.p = {
                    input_value: "0,1"
                  }
                }, _.d = {
                  ref: _.q = {
                    input_value: "0,2"
                  }
                }]
              }, _.g = {
                "BranchScopes:#text/0": [_.f = {
                  ref: _.r = {
                    input_value: "1,0"
                  }
                }, _.h = {
                  ref: _.s = {
                    input_value: "1,1"
                  }
                }, _.i = {
                  ref: _.t = {
                    input_value: "1,2"
                  }
                }]
              }, _.k = {
                "BranchScopes:#text/0": [_.j = {
                  ref: _.u = {
                    input_value: "2,0"
                  }
                }, _.l = {
                  ref: _.v = {
                    input_value: "2,1"
                  }
                }, _.m = {
                  ref: _.w = {
                    input_value: "2,2"
                  }
                }]
              }]
            }, , _.a, _.o, _.c, _.p, _.d, _.q, , _.f, _.r, _.h, _.s, _.i, _
            .t, , _.j, _.u, _.l, _.v, _.m, _.w
          ], _.a._ = _.c._ = _.d._ = _.n[2] = _.b, _.b._ = _.g._ = _.k._ = _
          .e, _.f._ = _.h._ = _.i._ = _.n[9] = _.g, _.j._ = _.l._ = _.m._ = _
          .n[16] = _.k, _.a.ref = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.o), _.c.ref = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.p), _.d.ref = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.q), _.f.ref = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.r), _.h.ref = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.s), _.i.ref = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.t), _.j.ref = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.u), _.l.ref = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.v), _.m.ref = _._[
            "__tests__/tags/child.marko_0/_return"
            ](_.w), _.n),
        "__tests__/template.marko_2 3 5 7 __tests__/template.marko_1 2 __tests__/template.marko_2 10 12 14 __tests__/template.marko_1 9 __tests__/template.marko_2 17 19 21 __tests__/template.marko_1 16 __tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #text
REMOVE #text in html/body/pre2
INSERT #text
REMOVE #text in html/body/pre2
INSERT #text
INSERT #text
REMOVE #text in html/body/pre2
INSERT #text
REMOVE #text in html/body/pre2
INSERT #text
REMOVE #text in html/body/pre2
INSERT #text
REMOVE #text in html/body/pre1
INSERT #text
REMOVE #text in html/body/pre2
INSERT #text
REMOVE #text in html/body/pre2
INSERT #text
REMOVE #text in html/body/pre2
INSERT html/body/pre2/#text
REMOVE #text in html/body/pre1
INSERT html/body/pre1/#text
INSERT html/body/pre0/#text
```