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
      M._.r = [_ =&gt; (_.c = [0, _.b = {
          "ConditionalScope:#text/0": _.a = {
            m5c: "_0"
          },
          "ConditionalRenderer:#text/0": _._.$compat_renderer(_._[
            "__tests__/components/my-button.marko"
            ]),
          count: 0,
          "ClosureScopes:count": _.d = new Set
        }, _.a, _.e = {
          m5c: "_0-1",
          _: _.b,
          "ClosureSignalIndex:count": 0
        }], (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.b]), "$compat_setScope",
        3
      ];
      M._.w();
      $MC = (window.$MC || []).concat(
      {
        "o":
        {
          "p": "_",
          "w": [
            ["_0", 0,
            {
              "renderBody": [
                "__tests__/template.marko_1_content",
                1
              ]
            },
            {
              "e": [
                ["click", [
                  "__tests__/template.marko_0/onClick",
                  1
                ]]
              ],
              "f": 1
            }]
          ],
          "t": [
            "__tests__/components/my-button.marko"
          ]
        },
        "$$": [
        {
          "l": ["w", 0, 3, "r"],
          "r": ["w", 0, 2, "renderBody"]
        }]
      });
      M._.r.push("$compat_setScope", 2);
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
      M._.r = [_ =&gt; (_.c = [0, _.b = {
          "ConditionalScope:#text/0": _.a = {
            m5c: "_0"
          },
          "ConditionalRenderer:#text/0": _._.$compat_renderer(_._[
            "__tests__/components/my-button.marko"
            ]),
          count: 0,
          "ClosureScopes:count": _.d = new Set
        }, _.a, _.e = {
          m5c: "_0-1",
          _: _.b,
          "ClosureSignalIndex:count": 0
        }], (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.b]), "$compat_setScope",
        3
      ];
      M._.w();
      $MC = (window.$MC || []).concat(
      {
        "o":
        {
          "p": "_",
          "w": [
            ["_0", 0,
            {
              "renderBody": [
                "__tests__/template.marko_1_content",
                1
              ]
            },
            {
              "e": [
                ["click", [
                  "__tests__/template.marko_0/onClick",
                  1
                ]]
              ],
              "f": 1
            }]
          ],
          "t": [
            "__tests__/components/my-button.marko"
          ]
        },
        "$$": [
        {
          "l": ["w", 0, 3, "r"],
          "r": ["w", 0, 2, "renderBody"]
        }]
      });
      M._.r.push("$compat_setScope", 2);
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
      M._.r = [_ =&gt; (_.c = [0, _.b = {
          "ConditionalScope:#text/0": _.a = {
            m5c: "_0"
          },
          "ConditionalRenderer:#text/0": _._.$compat_renderer(_._[
            "__tests__/components/my-button.marko"
            ]),
          count: 0,
          "ClosureScopes:count": _.d = new Set
        }, _.a, _.e = {
          m5c: "_0-1",
          _: _.b,
          "ClosureSignalIndex:count": 0
        }], (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.b]), "$compat_setScope",
        3
      ];
      M._.w();
      $MC = (window.$MC || []).concat(
      {
        "o":
        {
          "p": "_",
          "w": [
            ["_0", 0,
            {
              "renderBody": [
                "__tests__/template.marko_1_content",
                1
              ]
            },
            {
              "e": [
                ["click", [
                  "__tests__/template.marko_0/onClick",
                  1
                ]]
              ],
              "f": 1
            }]
          ],
          "t": [
            "__tests__/components/my-button.marko"
          ]
        },
        "$$": [
        {
          "l": ["w", 0, 3, "r"],
          "r": ["w", 0, 2, "renderBody"]
        }]
      });
      M._.r.push("$compat_setScope", 2);
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
      M._.r = [_ =&gt; (_.c = [0, _.b = {
          "ConditionalScope:#text/0": _.a = {
            m5c: "_0"
          },
          "ConditionalRenderer:#text/0": _._.$compat_renderer(_._[
            "__tests__/components/my-button.marko"
            ]),
          count: 0,
          "ClosureScopes:count": _.d = new Set
        }, _.a, _.e = {
          m5c: "_0-1",
          _: _.b,
          "ClosureSignalIndex:count": 0
        }], (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.b]), "$compat_setScope",
        3
      ];
      M._.w();
      $MC = (window.$MC || []).concat(
      {
        "o":
        {
          "p": "_",
          "w": [
            ["_0", 0,
            {
              "renderBody": [
                "__tests__/template.marko_1_content",
                1
              ]
            },
            {
              "e": [
                ["click", [
                  "__tests__/template.marko_0/onClick",
                  1
                ]]
              ],
              "f": 1
            }]
          ],
          "t": [
            "__tests__/components/my-button.marko"
          ]
        },
        "$$": [
        {
          "l": ["w", 0, 3, "r"],
          "r": ["w", 0, 2, "renderBody"]
        }]
      });
      M._.r.push("$compat_setScope", 2);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text2 "2" => "3"
```