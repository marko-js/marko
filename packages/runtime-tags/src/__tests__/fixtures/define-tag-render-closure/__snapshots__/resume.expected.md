# Render
```html
<html>
  <head />
  <body>
    <div>
      1
      <!--M_*2 #text/0-->
    </div>
    <!--M_[-->
    <div>
      1
      <!--M_*4 #text/0-->
    </div>
    <!--M_]1 #text/1 3-->
    <button>
      1
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/1": _.b = {},
          x: 1,
          "ClosureScopes:x": _.d = new Set
        }, _.e = {
          _: _.a,
          "ClosureSignalIndex:x": 0
        }, _.b, _.f = {
          _: _.a,
          "ClosureSignalIndex:x": 0,
          "#ClosestBranchId": 3
        }], (_.d).add(_.e), _.d.add(_.f), _.c),
        "__tests__/template.marko_0_x",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      2
      <!--M_*2 #text/0-->
    </div>
    <!---->
    <div>
      2
    </div>
    <!---->
    <!--M_]1 #text/1 3-->
    <button>
      2
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/1": _.b = {},
          x: 1,
          "ClosureScopes:x": _.d = new Set
        }, _.e = {
          _: _.a,
          "ClosureSignalIndex:x": 0
        }, _.b, _.f = {
          _: _.a,
          "ClosureSignalIndex:x": 0,
          "#ClosestBranchId": 3
        }], (_.d).add(_.e), _.d.add(_.f), _.c),
        "__tests__/template.marko_0_x",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
INSERT html/body/#comment0, html/body/div1, html/body/#comment1
REMOVE #comment after html/body/#comment1
REMOVE div after html/body/#comment1
REMOVE #text after html/body/#comment1
UPDATE html/body/div0/#text "1" => "2"
UPDATE html/body/div1/#text " " => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      3
      <!--M_*2 #text/0-->
    </div>
    <!---->
    <div>
      3
    </div>
    <!---->
    <!--M_]1 #text/1 3-->
    <button>
      3
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/1": _.b = {},
          x: 1,
          "ClosureScopes:x": _.d = new Set
        }, _.e = {
          _: _.a,
          "ClosureSignalIndex:x": 0
        }, _.b, _.f = {
          _: _.a,
          "ClosureSignalIndex:x": 0,
          "#ClosestBranchId": 3
        }], (_.d).add(_.e), _.d.add(_.f), _.c),
        "__tests__/template.marko_0_x",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
UPDATE html/body/div0/#text "2" => "3"
UPDATE html/body/div1/#text "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      4
      <!--M_*2 #text/0-->
    </div>
    <!---->
    <div>
      4
    </div>
    <!---->
    <!--M_]1 #text/1 3-->
    <button>
      4
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/1": _.b = {},
          x: 1,
          "ClosureScopes:x": _.d = new Set
        }, _.e = {
          _: _.a,
          "ClosureSignalIndex:x": 0
        }, _.b, _.f = {
          _: _.a,
          "ClosureSignalIndex:x": 0,
          "#ClosestBranchId": 3
        }], (_.d).add(_.e), _.d.add(_.f), _.c),
        "__tests__/template.marko_0_x",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "3" => "4"
UPDATE html/body/div0/#text "3" => "4"
UPDATE html/body/div1/#text "3" => "4"
```