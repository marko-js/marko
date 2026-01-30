# Render
```html
<html>
  <head />
  <body>
    <pre
      id="root"
    >
      9; 0, 0
	
    </pre>
    <!--M_*1 #pre/0-->
    <pre
      id="outer"
    >
      3; 0, 0
	3; 1, 0
	3; 2, 0
	
    </pre>
    <!--M_*1 #pre/1-->
    <pre
      id="inner"
    >
      1; 0, 0
	1; 0, 1
	1; 0, 2
	1; 1, 0
	1; 1, 1
	1; 1, 2
	1; 2, 0
	1; 2, 1
	1; 2, 2
	
    </pre>
    <!--M_*1 #pre/2-->
    <div
      class="0, 0"
    />
    <!--M_*3 #div/0-->
    <div
      class="0, 1"
    />
    <!--M_*4 #div/0-->
    <div
      class="0, 2"
    />
    <!--M_*5 #div/0-->
    <div
      class="1, 0"
    />
    <!--M_*7 #div/0-->
    <div
      class="1, 1"
    />
    <!--M_*8 #div/0-->
    <div
      class="1, 2"
    />
    <!--M_*9 #div/0-->
    <div
      class="2, 0"
    />
    <!--M_*11 #div/0-->
    <div
      class="2, 1"
    />
    <!--M_*12 #div/0-->
    <div
      class="2, 2"
    />
    <!--M_*13 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.n = [0, _.e = {
            "BranchScopes:#text/3": [_.a = {
              "BranchScopes:#text/0": [_.b = {}, _.c = {}, _.d = {}]
            }, _.f = {
              "BranchScopes:#text/0": [_.g = {}, _.h = {}, _.i = {}]
            }, _.j = {
              "BranchScopes:#text/0": [_.k = {}, _.l = {}, _.m = {}]
            }]
          }, , _.b, _.c, _.d, , _.g, _.h, _.i, , _.k, _.l, _.m], _.b._ = _.c
          ._ = _.d._ = _.n[2] = _.a, _.a._ = _.f._ = _.j._ = _.e, _.g._ = _.h
          ._ = _.i._ = _.n[6] = _.f, _.k._ = _.l._ = _.m._ = _.n[10] = _.j, _
          .n),
        "__tests__/template.marko_2 3 4 5 __tests__/template.marko_1 2 __tests__/template.marko_2 7 8 9 __tests__/template.marko_1 6 __tests__/template.marko_2 11 12 13 __tests__/template.marko_1 10 __tests__/template.marko_0 1"
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