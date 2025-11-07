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
      M._.r = [_ =&gt; (_.b = [0, _.a = {
        "ConditionalRenderer:#text/0": _._[
          "__tests__/components/my-button.marko"
          ],
        count: 0,
        "ClosureScopes:count": _.c = new Set
      },
      {
        m5c: "_0"
      }, _.d = {
        m5c: "_0-1",
        _: _.a,
        "ClosureSignalIndex:count": 0
      }], _.a["ConditionalRenderer:#text/0"] = _._.$compat_renderer(_.a[
        "ConditionalRenderer:#text/0"]), (_.c).add(_.d), _.b), _ =&gt; (_.e = [
        -3, _.a
      ]), "$compat_setScope", 3];
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
      M._.r = [_ =&gt; (_.b = [0, _.a = {
        "ConditionalRenderer:#text/0": _._[
          "__tests__/components/my-button.marko"
          ],
        count: 0,
        "ClosureScopes:count": _.c = new Set
      },
      {
        m5c: "_0"
      }, _.d = {
        m5c: "_0-1",
        _: _.a,
        "ClosureSignalIndex:count": 0
      }], _.a["ConditionalRenderer:#text/0"] = _._.$compat_renderer(_.a[
        "ConditionalRenderer:#text/0"]), (_.c).add(_.d), _.b), _ =&gt; (_.e = [
        -3, _.a
      ]), "$compat_setScope", 3];
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
      M._.r = [_ =&gt; (_.b = [0, _.a = {
        "ConditionalRenderer:#text/0": _._[
          "__tests__/components/my-button.marko"
          ],
        count: 0,
        "ClosureScopes:count": _.c = new Set
      },
      {
        m5c: "_0"
      }, _.d = {
        m5c: "_0-1",
        _: _.a,
        "ClosureSignalIndex:count": 0
      }], _.a["ConditionalRenderer:#text/0"] = _._.$compat_renderer(_.a[
        "ConditionalRenderer:#text/0"]), (_.c).add(_.d), _.b), _ =&gt; (_.e = [
        -3, _.a
      ]), "$compat_setScope", 3];
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
      M._.r = [_ =&gt; (_.b = [0, _.a = {
        "ConditionalRenderer:#text/0": _._[
          "__tests__/components/my-button.marko"
          ],
        count: 0,
        "ClosureScopes:count": _.c = new Set
      },
      {
        m5c: "_0"
      }, _.d = {
        m5c: "_0-1",
        _: _.a,
        "ClosureSignalIndex:count": 0
      }], _.a["ConditionalRenderer:#text/0"] = _._.$compat_renderer(_.a[
        "ConditionalRenderer:#text/0"]), (_.c).add(_.d), _.b), _ =&gt; (_.e = [
        -3, _.a
      ]), "$compat_setScope", 3];
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