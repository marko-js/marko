# Render
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <button
      id="class-api"
    >
      0
    </button>
    <!--M_]1 #text/0-->
    <div
      id="tags-api"
    >
      0
      <!--M_*1 #text/1-->
    </div>
    <script>
      $MC = (window.$MC || []).concat(
      {
        "p": "_",
        "w": [
          ["_0", 0,
          {},
          {
            "e": [
              ["count", [
                "__tests__/template.marko_0/onCount",
                1
              ]]
            ],
            "f": 1
          }]
        ],
        "t": [
          "__tests__/components/class-counter.marko"
        ]
      });
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
      {
        "ConditionalScope:#text/0": _.a = {
          m5c: "_0"
        },
        "ConditionalRenderer:#text/0": _._.$compat_renderer(_._[
          "__tests__/components/class-counter.marko"
          ])
      }, _.a]), "$compat_setScope", 2];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text0
INSERT html/body/#text1
REMOVE #comment after html/body/#comment0
REMOVE #comment after html/body/#text1
```

# Render
```js
container.querySelector("#class-api").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <button
      id="class-api"
    >
      1
    </button>
    <!--M_]1 #text/0-->
    <div
      id="tags-api"
    >
      1
      <!--M_*1 #text/1-->
    </div>
    <script>
      $MC = (window.$MC || []).concat(
      {
        "p": "_",
        "w": [
          ["_0", 0,
          {},
          {
            "e": [
              ["count", [
                "__tests__/template.marko_0/onCount",
                1
              ]]
            ],
            "f": 1
          }]
        ],
        "t": [
          "__tests__/components/class-counter.marko"
        ]
      });
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
      {
        "ConditionalScope:#text/0": _.a = {
          m5c: "_0"
        },
        "ConditionalRenderer:#text/0": _._.$compat_renderer(_._[
          "__tests__/components/class-counter.marko"
          ])
      }, _.a]), "$compat_setScope", 2];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text "0" => "1"
UPDATE html/body/button/#text "0" => "1"
```

# Render
```js
container.querySelector("#class-api").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <button
      id="class-api"
    >
      2
    </button>
    <!--M_]1 #text/0-->
    <div
      id="tags-api"
    >
      2
      <!--M_*1 #text/1-->
    </div>
    <script>
      $MC = (window.$MC || []).concat(
      {
        "p": "_",
        "w": [
          ["_0", 0,
          {},
          {
            "e": [
              ["count", [
                "__tests__/template.marko_0/onCount",
                1
              ]]
            ],
            "f": 1
          }]
        ],
        "t": [
          "__tests__/components/class-counter.marko"
        ]
      });
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
      {
        "ConditionalScope:#text/0": _.a = {
          m5c: "_0"
        },
        "ConditionalRenderer:#text/0": _._.$compat_renderer(_._[
          "__tests__/components/class-counter.marko"
          ])
      }, _.a]), "$compat_setScope", 2];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text "1" => "2"
UPDATE html/body/button/#text "1" => "2"
```