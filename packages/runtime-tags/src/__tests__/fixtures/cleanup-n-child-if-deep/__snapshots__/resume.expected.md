# Render
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
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
    </pre>
    <!--M_*1 #pre/3-->
    <div>
      <div>
        Outer a
      </div>
      <span>
        Outer a
      </span>
      <p>
        Outer a
      </p>
      <div>
        <div>
          Middle a
        </div>
        <span>
          Middle a
        </span>
        <p>
          Middle a
        </p>
        <!--M_[-->
        <div>
          Inner a
        </div>
        <span>
          Inner a
        </span>
        <p>
          Inner a
        </p>
        <!--M_]4 #text/1 6-->
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
INSERT html/body/div/div1/#text
INSERT #text
REMOVE #text in html/body/pre
INSERT #text
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
```

# Render
```js
container.querySelector("button#inner").click();
```
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
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
    </pre>
    <!--M_*1 #pre/3-->
    <div>
      <div>
        Outer a
      </div>
      <span>
        Outer a
      </span>
      <p>
        Outer a
      </p>
      <div>
        <div>
          Middle a
        </div>
        <span>
          Middle a
        </span>
        <p>
          Middle a
        </p>
        <!--M_]4 #text/1 6-->
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
REMOVE html/body/div/div1/#comment after #text
INSERT html/body/div/div1/#comment
REMOVE #comment after html/body/div/div1/#comment
REMOVE div after html/body/div/div1/#comment
REMOVE span after html/body/div/div1/#comment
REMOVE p after html/body/div/div1/#comment
REMOVE #text after html/body/div/div1/#comment
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
```

# Render
```js
container.querySelector("button#middle").click();
```
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
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
    </pre>
    <!--M_*1 #pre/3-->
    <div>
      <div>
        Outer a
      </div>
      <span>
        Outer a
      </span>
      <p>
        Outer a
      </p>
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
REMOVE html/body/div/#comment after div
INSERT html/body/div/#comment
REMOVE div after html/body/div/#comment
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
```

# Render
```js
container.querySelector("button#outer").click();
```
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
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
    </pre>
    <!--M_*1 #pre/3-->
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
REMOVE html/body/#comment4 after div
INSERT html/body/#comment4
REMOVE div after html/body/#comment4
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
```

# Render
```js
container.querySelector("button#inner").click();
```
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
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
    </pre>
    <!--M_*1 #pre/3-->
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


# Render
```js
container.querySelector("button#middle").click();
```
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
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
    </pre>
    <!--M_*1 #pre/3-->
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


# Render
```js
container.querySelector("button#outer").click();
```
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
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
Outer mounted
Middle mounted
Inner mounted
    </pre>
    <!--M_*1 #pre/3-->
    <div>
      <div>
        Outer a
      </div>
      <span>
        Outer a
      </span>
      <p>
        Outer a
      </p>
      <div>
        <div>
          Middle a
        </div>
        <span>
          Middle a
        </span>
        <p>
          Middle a
        </p>
        <div>
          Inner a
        </div>
        <span>
          Inner a
        </span>
        <p>
          Inner a
        </p>
      </div>
    </div>
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
INSERT html/body/div
REMOVE #comment after html/body/div
UPDATE html/body/div/div0/#text0 "" => "Outer"
UPDATE html/body/div/span/#text0 "" => "Outer"
UPDATE html/body/div/p/#text0 "" => "Outer"
INSERT html/body/div/div1
REMOVE #text after html/body/div/div1
UPDATE html/body/div/div1/div0/#text0 "" => "Middle"
UPDATE html/body/div/div1/span0/#text0 "" => "Middle"
UPDATE html/body/div/div1/p0/#text0 "" => "Middle"
INSERT html/body/div/div1/div1, html/body/div/div1/span1, html/body/div/div1/p1
REMOVE #text after html/body/div/div1/p1
UPDATE html/body/div/div1/div1/#text0 "" => "Inner"
UPDATE html/body/div/div1/span1/#text0 "" => "Inner"
UPDATE html/body/div/div1/p1/#text0 "" => "Inner"
REMOVE #text in html/body/pre
INSERT #text
REMOVE #text in html/body/pre
INSERT #text
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
```

# Render
```js
container.querySelector("button#outer").click();
```
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
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
    </pre>
    <!--M_*1 #pre/3-->
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
INSERT html/body/#comment4
REMOVE div after html/body/#comment4
REMOVE #text in html/body/pre
INSERT #text
REMOVE #text in html/body/pre
INSERT #text
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
```