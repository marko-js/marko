# Render
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <button>
      0
      <!--M_*3 #text/0-->
    </button>
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalRenderer:#text/0": _._[
            "__tests__/components/my-button.marko"
            ],
          count: 0,
          "ClosureScopes:count": _.d = new Set
        },
        {
          m5c: "_0",
          m5i: _.b = {}
        }, _.e = {
          m5c: "_0-1",
          _: _.a,
          "ClosureSignalIndex:count": 0
        }], _.a["ConditionalRenderer:#text/0"] = _._.$compat_renderer(_.a[
          "ConditionalRenderer:#text/0"]), _.b.renderBody = _._[
          "__tests__/template.marko_1_content"
          ](_.a), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.a]),
        "$compat_setScope 3"
      ];
      M._.w();
      $MC = (window.$MC || []).concat(
      {
        "p": "_",
        "w": [
          ["_0", 0, 2,
          {
            "e": [
              ["click", [
                "__tests__/template.marko_0/onClick",
                1
              ]]
            ],
            "f": 1,
            "r": [
              "__tests__/template.marko_1_content",
              1
            ]
          }]
        ],
        "t": [
          "__tests__/components/my-button.marko"
        ]
      });
      M._.r.push("$compat_setScope 2");
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text2
INSERT html/body/#text0
INSERT html/body/#text1
REMOVE #comment after html/body/#comment0
REMOVE #comment after html/body/#text1
INSERT html/body/button/#text0
INSERT html/body/button/#text4
INSERT html/body/button/#text1
INSERT html/body/button/#text3
REMOVE #comment after html/body/button/#text1
REMOVE #comment after html/body/button/#comment
REMOVE html/body/button/#text4 after html/body/button/#text3
INSERT html/body/button/#text4
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <button>
      1
      <!--M_*3 #text/0-->
    </button>
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalRenderer:#text/0": _._[
            "__tests__/components/my-button.marko"
            ],
          count: 0,
          "ClosureScopes:count": _.d = new Set
        },
        {
          m5c: "_0",
          m5i: _.b = {}
        }, _.e = {
          m5c: "_0-1",
          _: _.a,
          "ClosureSignalIndex:count": 0
        }], _.a["ConditionalRenderer:#text/0"] = _._.$compat_renderer(_.a[
          "ConditionalRenderer:#text/0"]), _.b.renderBody = _._[
          "__tests__/template.marko_1_content"
          ](_.a), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.a]),
        "$compat_setScope 3"
      ];
      M._.w();
      $MC = (window.$MC || []).concat(
      {
        "p": "_",
        "w": [
          ["_0", 0, 2,
          {
            "e": [
              ["click", [
                "__tests__/template.marko_0/onClick",
                1
              ]]
            ],
            "f": 1,
            "r": [
              "__tests__/template.marko_1_content",
              1
            ]
          }]
        ],
        "t": [
          "__tests__/components/my-button.marko"
        ]
      });
      M._.r.push("$compat_setScope 2");
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text2 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <button>
      2
      <!--M_*3 #text/0-->
    </button>
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalRenderer:#text/0": _._[
            "__tests__/components/my-button.marko"
            ],
          count: 0,
          "ClosureScopes:count": _.d = new Set
        },
        {
          m5c: "_0",
          m5i: _.b = {}
        }, _.e = {
          m5c: "_0-1",
          _: _.a,
          "ClosureSignalIndex:count": 0
        }], _.a["ConditionalRenderer:#text/0"] = _._.$compat_renderer(_.a[
          "ConditionalRenderer:#text/0"]), _.b.renderBody = _._[
          "__tests__/template.marko_1_content"
          ](_.a), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.a]),
        "$compat_setScope 3"
      ];
      M._.w();
      $MC = (window.$MC || []).concat(
      {
        "p": "_",
        "w": [
          ["_0", 0, 2,
          {
            "e": [
              ["click", [
                "__tests__/template.marko_0/onClick",
                1
              ]]
            ],
            "f": 1,
            "r": [
              "__tests__/template.marko_1_content",
              1
            ]
          }]
        ],
        "t": [
          "__tests__/components/my-button.marko"
        ]
      });
      M._.r.push("$compat_setScope 2");
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text2 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <button>
      3
      <!--M_*3 #text/0-->
    </button>
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalRenderer:#text/0": _._[
            "__tests__/components/my-button.marko"
            ],
          count: 0,
          "ClosureScopes:count": _.d = new Set
        },
        {
          m5c: "_0",
          m5i: _.b = {}
        }, _.e = {
          m5c: "_0-1",
          _: _.a,
          "ClosureSignalIndex:count": 0
        }], _.a["ConditionalRenderer:#text/0"] = _._.$compat_renderer(_.a[
          "ConditionalRenderer:#text/0"]), _.b.renderBody = _._[
          "__tests__/template.marko_1_content"
          ](_.a), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.a]),
        "$compat_setScope 3"
      ];
      M._.w();
      $MC = (window.$MC || []).concat(
      {
        "p": "_",
        "w": [
          ["_0", 0, 2,
          {
            "e": [
              ["click", [
                "__tests__/template.marko_0/onClick",
                1
              ]]
            ],
            "f": 1,
            "r": [
              "__tests__/template.marko_1_content",
              1
            ]
          }]
        ],
        "t": [
          "__tests__/components/my-button.marko"
        ]
      });
      M._.r.push("$compat_setScope 2");
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text2 "2" => "3"
```