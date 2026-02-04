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
      M._.r = [_ =&gt; (_.g = [0, _.a = {
          showOuter: !0,
          showMiddle: !0,
          showInner: !0,
          "ClosureScopes:showInner": _.h = new Set
        }, _.c = {
          _: _.a
        }, _.b = {
          name: "Outer",
          "#ClosestBranchId": 2
        }, _.e = {
          _: _.c,
          "ClosureSignalIndex:showInner": 0
        }, _.d = {
          name: "Middle",
          "#ClosestBranchId": 4
        },
        {
          _: _.e
        }, _.f = {
          name: "Inner",
          "#ClosestBranchId": 6
        }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
          "__tests__/template.marko_0/write"
          ](_.a), (_.h).add(_.e), _.g),
        "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
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
      <p>
        Outer
      </p>
      <div>
        <p>
          Middle
        </p>
        <!--M_|4 #text/1 6-->
      </div>
      <!--M_|2 #text/1 4-->
    </div>
    <!--M_|1 #text/4 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.g = [0, _.a = {
          showOuter: !0,
          showMiddle: !0,
          showInner: !0,
          "ClosureScopes:showInner": _.h = new Set
        }, _.c = {
          _: _.a
        }, _.b = {
          name: "Outer",
          "#ClosestBranchId": 2
        }, _.e = {
          _: _.c,
          "ClosureSignalIndex:showInner": 0
        }, _.d = {
          name: "Middle",
          "#ClosestBranchId": 4
        },
        {
          _: _.e
        }, _.f = {
          name: "Inner",
          "#ClosestBranchId": 6
        }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
          "__tests__/template.marko_0/write"
          ](_.a), (_.h).add(_.e), _.g),
        "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/div/#comment after p
INSERT html/body/div/div/#comment
REMOVE p after html/body/div/div/#comment
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
      <p>
        Outer
      </p>
      <!--M_|2 #text/1 4-->
    </div>
    <!--M_|1 #text/4 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.g = [0, _.a = {
          showOuter: !0,
          showMiddle: !0,
          showInner: !0,
          "ClosureScopes:showInner": _.h = new Set
        }, _.c = {
          _: _.a
        }, _.b = {
          name: "Outer",
          "#ClosestBranchId": 2
        }, _.e = {
          _: _.c,
          "ClosureSignalIndex:showInner": 0
        }, _.d = {
          name: "Middle",
          "#ClosestBranchId": 4
        },
        {
          _: _.e
        }, _.f = {
          name: "Inner",
          "#ClosestBranchId": 6
        }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
          "__tests__/template.marko_0/write"
          ](_.a), (_.h).add(_.e), _.g),
        "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
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
      M._.r = [_ =&gt; (_.g = [0, _.a = {
          showOuter: !0,
          showMiddle: !0,
          showInner: !0,
          "ClosureScopes:showInner": _.h = new Set
        }, _.c = {
          _: _.a
        }, _.b = {
          name: "Outer",
          "#ClosestBranchId": 2
        }, _.e = {
          _: _.c,
          "ClosureSignalIndex:showInner": 0
        }, _.d = {
          name: "Middle",
          "#ClosestBranchId": 4
        },
        {
          _: _.e
        }, _.f = {
          name: "Inner",
          "#ClosestBranchId": 6
        }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
          "__tests__/template.marko_0/write"
          ](_.a), (_.h).add(_.e), _.g),
        "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
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
      M._.r = [_ =&gt; (_.g = [0, _.a = {
          showOuter: !0,
          showMiddle: !0,
          showInner: !0,
          "ClosureScopes:showInner": _.h = new Set
        }, _.c = {
          _: _.a
        }, _.b = {
          name: "Outer",
          "#ClosestBranchId": 2
        }, _.e = {
          _: _.c,
          "ClosureSignalIndex:showInner": 0
        }, _.d = {
          name: "Middle",
          "#ClosestBranchId": 4
        },
        {
          _: _.e
        }, _.f = {
          name: "Inner",
          "#ClosestBranchId": 6
        }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
          "__tests__/template.marko_0/write"
          ](_.a), (_.h).add(_.e), _.g),
        "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
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
      M._.r = [_ =&gt; (_.g = [0, _.a = {
          showOuter: !0,
          showMiddle: !0,
          showInner: !0,
          "ClosureScopes:showInner": _.h = new Set
        }, _.c = {
          _: _.a
        }, _.b = {
          name: "Outer",
          "#ClosestBranchId": 2
        }, _.e = {
          _: _.c,
          "ClosureSignalIndex:showInner": 0
        }, _.d = {
          name: "Middle",
          "#ClosestBranchId": 4
        },
        {
          _: _.e
        }, _.f = {
          name: "Inner",
          "#ClosestBranchId": 6
        }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
          "__tests__/template.marko_0/write"
          ](_.a), (_.h).add(_.e), _.g),
        "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
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
      </div>
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.g = [0, _.a = {
          showOuter: !0,
          showMiddle: !0,
          showInner: !0,
          "ClosureScopes:showInner": _.h = new Set
        }, _.c = {
          _: _.a
        }, _.b = {
          name: "Outer",
          "#ClosestBranchId": 2
        }, _.e = {
          _: _.c,
          "ClosureSignalIndex:showInner": 0
        }, _.d = {
          name: "Middle",
          "#ClosestBranchId": 4
        },
        {
          _: _.e
        }, _.f = {
          name: "Inner",
          "#ClosestBranchId": 6
        }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
          "__tests__/template.marko_0/write"
          ](_.a), (_.h).add(_.e), _.g),
        "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
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
INSERT html/body/div/div
REMOVE #text after html/body/div/div
UPDATE html/body/div/p/#text " " => "Outer"
INSERT html/body/div/div/p1
REMOVE #text after html/body/div/div/p1
UPDATE html/body/div/div/p0/#text " " => "Middle"
UPDATE html/body/div/div/p1/#text " " => "Inner"
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
      M._.r = [_ =&gt; (_.g = [0, _.a = {
          showOuter: !0,
          showMiddle: !0,
          showInner: !0,
          "ClosureScopes:showInner": _.h = new Set
        }, _.c = {
          _: _.a
        }, _.b = {
          name: "Outer",
          "#ClosestBranchId": 2
        }, _.e = {
          _: _.c,
          "ClosureSignalIndex:showInner": 0
        }, _.d = {
          name: "Middle",
          "#ClosestBranchId": 4
        },
        {
          _: _.e
        }, _.f = {
          name: "Inner",
          "#ClosestBranchId": 6
        }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
          "__tests__/template.marko_0/write"
          ](_.a), (_.h).add(_.e), _.g),
        "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
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