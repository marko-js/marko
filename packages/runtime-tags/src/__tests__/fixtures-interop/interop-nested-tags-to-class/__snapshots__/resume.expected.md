# Render
```html
<html>
  <head />
  <body>
    <button
      id="class"
    >
      0
    </button>
    <div>
      <button
        id="tags"
      >
        0
        <!--M_*3 #text/1-->
      </button>
      <!--M_*3 #button/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          count: 0,
          "ClosureScopes:count": _.c = new Set
        },
        {
          m5c: "_0"
        }, _.d = {
          m5c: "_0-2",
          _: _.a,
          "ClosureSignalIndex:count": 0
        }], (_.c).add(_.d), _.b), _ =&gt; (_.e = [-3, _.a]),
        "$compat_setScope 3 __tests__/template.marko_1_count 3"
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
              "f": 1
            }]
          ],
          "t": [
            "__tests__/components/class-layout.marko"
          ]
        },
        "$$": [
        {
          "l": ["w", 0, 3, "r"],
          "r": ["w", 0, 2, "renderBody"]
        }]
      });
      M._.r.push("$compat_setScope 2");
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text0
INSERT html/body/#text1
REMOVE #comment before html/body/#text0
REMOVE #comment after html/body/#text1
INSERT html/body/div/#text0
INSERT html/body/div/#text3
INSERT html/body/div/#text1
INSERT html/body/div/#text2
REMOVE #comment after html/body/div/#text1
REMOVE #comment after html/body/div/#comment
REMOVE html/body/div/#text3 after html/body/div/#text2
INSERT html/body/div/#text3
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="class"
    >
      0
    </button>
    <div>
      <button
        id="tags"
      >
        1
        <!--M_*3 #text/1-->
      </button>
      <!--M_*3 #button/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          count: 0,
          "ClosureScopes:count": _.c = new Set
        },
        {
          m5c: "_0"
        }, _.d = {
          m5c: "_0-2",
          _: _.a,
          "ClosureSignalIndex:count": 0
        }], (_.c).add(_.d), _.b), _ =&gt; (_.e = [-3, _.a]),
        "$compat_setScope 3 __tests__/template.marko_1_count 3"
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
              "f": 1
            }]
          ],
          "t": [
            "__tests__/components/class-layout.marko"
          ]
        },
        "$$": [
        {
          "l": ["w", 0, 3, "r"],
          "r": ["w", 0, 2, "renderBody"]
        }]
      });
      M._.r.push("$compat_setScope 2");
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text "0" => "1"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="class"
    >
      1
    </button>
    <div>
      <button
        id="tags"
      >
        1
        <!--M_*3 #text/1-->
      </button>
      <!--M_*3 #button/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          count: 0,
          "ClosureScopes:count": _.c = new Set
        },
        {
          m5c: "_0"
        }, _.d = {
          m5c: "_0-2",
          _: _.a,
          "ClosureSignalIndex:count": 0
        }], (_.c).add(_.d), _.b), _ =&gt; (_.e = [-3, _.a]),
        "$compat_setScope 3 __tests__/template.marko_1_count 3"
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
              "f": 1
            }]
          ],
          "t": [
            "__tests__/components/class-layout.marko"
          ]
        },
        "$$": [
        {
          "l": ["w", 0, 3, "r"],
          "r": ["w", 0, 2, "renderBody"]
        }]
      });
      M._.r.push("$compat_setScope 2");
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "0" => "1"
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="class"
    >
      1
    </button>
    <div>
      <button
        id="tags"
      >
        2
        <!--M_*3 #text/1-->
      </button>
      <!--M_*3 #button/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          count: 0,
          "ClosureScopes:count": _.c = new Set
        },
        {
          m5c: "_0"
        }, _.d = {
          m5c: "_0-2",
          _: _.a,
          "ClosureSignalIndex:count": 0
        }], (_.c).add(_.d), _.b), _ =&gt; (_.e = [-3, _.a]),
        "$compat_setScope 3 __tests__/template.marko_1_count 3"
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
              "f": 1
            }]
          ],
          "t": [
            "__tests__/components/class-layout.marko"
          ]
        },
        "$$": [
        {
          "l": ["w", 0, 3, "r"],
          "r": ["w", 0, 2, "renderBody"]
        }]
      });
      M._.r.push("$compat_setScope 2");
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text "1" => "2"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="class"
    >
      2
    </button>
    <div>
      <button
        id="tags"
      >
        2
        <!--M_*3 #text/1-->
      </button>
      <!--M_*3 #button/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          count: 0,
          "ClosureScopes:count": _.c = new Set
        },
        {
          m5c: "_0"
        }, _.d = {
          m5c: "_0-2",
          _: _.a,
          "ClosureSignalIndex:count": 0
        }], (_.c).add(_.d), _.b), _ =&gt; (_.e = [-3, _.a]),
        "$compat_setScope 3 __tests__/template.marko_1_count 3"
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
              "f": 1
            }]
          ],
          "t": [
            "__tests__/components/class-layout.marko"
          ]
        },
        "$$": [
        {
          "l": ["w", 0, 3, "r"],
          "r": ["w", 0, 2, "renderBody"]
        }]
      });
      M._.r.push("$compat_setScope 2");
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="class"
    >
      2
    </button>
    <div>
      <button
        id="tags"
      >
        3
        <!--M_*3 #text/1-->
      </button>
      <!--M_*3 #button/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          count: 0,
          "ClosureScopes:count": _.c = new Set
        },
        {
          m5c: "_0"
        }, _.d = {
          m5c: "_0-2",
          _: _.a,
          "ClosureSignalIndex:count": 0
        }], (_.c).add(_.d), _.b), _ =&gt; (_.e = [-3, _.a]),
        "$compat_setScope 3 __tests__/template.marko_1_count 3"
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
              "f": 1
            }]
          ],
          "t": [
            "__tests__/components/class-layout.marko"
          ]
        },
        "$$": [
        {
          "l": ["w", 0, 3, "r"],
          "r": ["w", 0, 2, "renderBody"]
        }]
      });
      M._.r.push("$compat_setScope 2");
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text "2" => "3"
```