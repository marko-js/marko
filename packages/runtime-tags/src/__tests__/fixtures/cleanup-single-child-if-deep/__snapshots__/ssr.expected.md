# Write
```html
  <button id=outer>Toggle Outer</button><!--M_*1 #button/0--><button id=middle>Toggle Middle</button><!--M_*1 #button/1--><button id=inner>Toggle Inner</button><!--M_*1 #button/2--><pre></pre><!--M_*1 #pre/3--><div><p>Outer</p><div><p>Middle</p><p>Inner</p><!--M_|4 #text/1 6--></div><!--M_|2 #text/1 4--></div><!--M_|1 #text/4 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.e=[0,_.d={"ConditionalScope:#text/4":_.c={"ConditionalScope:#text/1":_.a={"ConditionalScope:#text/1":_.b={},"ClosureSignalIndex:showInner":0}},showOuter:!0,showMiddle:!0,showInner:!0,"ClosureScopes:showInner":_.i=new Set},,_.f={name:"Outer","#ClosestBranchId":2},,_.g={name:"Middle","#ClosestBranchId":4},_.b,_.h={name:"Inner","#ClosestBranchId":6}],_.b._=_.e[4]=_.a,_.a._=_.e[2]=_.c,_.c._=_.d,_.d.write=_.f.write=_.g.write=_.h.write=_._["__tests__/template.marko_0/write"](_.d),(_.i).add(_.a),_.e),"__tests__/tags/child.marko_0_name_write",3,5,7,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*1 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*1 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*1 #button/2-->
    <pre />
    <!--M_*1 #pre/3-->
    <div>
      <p>
        Outer
      </p>
      <div>
        <p>
          Middle
        </p>
        <p>
          Inner
        </p>
        <!--M_|4 #text/1 6-->
      </div>
      <!--M_|2 #text/1 4-->
    </div>
    <!--M_|1 #text/4 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.d = {
            "ConditionalScope:#text/4": _.c = {
              "ConditionalScope:#text/1": _.a = {
                "ConditionalScope:#text/1": _.b = {},
                "ClosureSignalIndex:showInner": 0
              }
            },
            showOuter: !0,
            showMiddle: !0,
            showInner: !0,
            "ClosureScopes:showInner": _.i = new Set
          }, , _.f = {
            name: "Outer",
            "#ClosestBranchId": 2
          }, , _.g = {
            name: "Middle",
            "#ClosestBranchId": 4
          }, _.b, _.h = {
            name: "Inner",
            "#ClosestBranchId": 6
          }], _.b._ = _.e[4] = _.a, _.a._ = _.e[2] = _.c, _.c._ = _.d, _.d
          .write = _.f.write = _.g.write = _.h.write = _._[
            "__tests__/template.marko_0/write"
            ](_.d), (_.i).add(_.a), _.e),
        "__tests__/tags/child.marko_0_name_write",
        3, 5, 7,
        "__tests__/template.marko_0_showInner",
        1,
        "__tests__/template.marko_0_showMiddle",
        1,
        "__tests__/template.marko_0_showOuter",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/button0
INSERT html/body/button0/#text
INSERT html/body/#comment0
INSERT html/body/button1
INSERT html/body/button1/#text
INSERT html/body/#comment1
INSERT html/body/button2
INSERT html/body/button2/#text
INSERT html/body/#comment2
INSERT html/body/pre
INSERT html/body/#comment3
INSERT html/body/div
INSERT html/body/div/p
INSERT html/body/div/p/#text
INSERT html/body/div/div
INSERT html/body/div/div/p0
INSERT html/body/div/div/p0/#text
INSERT html/body/div/div/p1
INSERT html/body/div/div/p1/#text
INSERT html/body/div/div/#comment
INSERT html/body/div/#comment
INSERT html/body/#comment4
INSERT html/body/script
INSERT html/body/script/#text
```