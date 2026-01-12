# Render
```html
<html>
  <head />
  <body>
    <button>
      Say Hi
    </button>
    <span
      id="display"
    />
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1,
      {
        m5c: "_0",
        m5i: _.a = {
          renderBody: _.c = {}
        }
      },
      {
        m5c: "_0-1"
      }], _.a.renderBody = _._[
        "__tests__/template.marko_1_content"
        ](_.c), _.b), _ =&gt; (_.d = [-3, _.c]), "$compat_setScope 3"];
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
                null
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
          "__tests__/components/my-button/index.marko"
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
INSERT html/body/#text0
INSERT html/body/#text1
REMOVE #comment before html/body/#text0
REMOVE #comment after html/body/#text1
INSERT html/body/button/#text0
INSERT html/body/button/#text4
INSERT html/body/button/#text1
INSERT html/body/button/#text3
REMOVE #comment after html/body/button/#text1
REMOVE #comment after html/body/button/#text2
REMOVE html/body/button/#text4 after html/body/button/#text3
INSERT html/body/button/#text4
```

# Render ASYNC
```html
<html>
  <head />
  <body>
    <button>
      Say Hi
    </button>
    <span
      id="display"
    >
      Hi!
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1,
      {
        m5c: "_0",
        m5i: _.a = {
          renderBody: _.c = {}
        }
      },
      {
        m5c: "_0-1"
      }], _.a.renderBody = _._[
        "__tests__/template.marko_1_content"
        ](_.c), _.b), _ =&gt; (_.d = [-3, _.c]), "$compat_setScope 3"];
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
                null
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
          "__tests__/components/my-button/index.marko"
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
INSERT html/body/span/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      Say Hi
    </button>
    <span
      id="display"
    >
      Hi!
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1,
      {
        m5c: "_0",
        m5i: _.a = {
          renderBody: _.c = {}
        }
      },
      {
        m5c: "_0-1"
      }], _.a.renderBody = _._[
        "__tests__/template.marko_1_content"
        ](_.c), _.b), _ =&gt; (_.d = [-3, _.c]), "$compat_setScope 3"];
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
                null
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
          "__tests__/components/my-button/index.marko"
        ]
      });
      M._.r.push("$compat_setScope 2");
      M._.w()
    </script>
  </body>
</html>
```
