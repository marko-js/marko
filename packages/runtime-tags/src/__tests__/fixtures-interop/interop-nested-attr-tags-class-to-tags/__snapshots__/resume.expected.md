# Render
```html
<!--F#1-->
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      0
    </button>
    <div>
      <button
        id="class"
      >
        0
      </button>
    </div>
    <script>
      WALKER_RUNTIME("M")("s");
      M.s.r = [_ =&gt; (_.a = [0,
        {
          m5c: "s0-0",
          "ConditionalRenderer:#text/2": _._.$compat_renderBody,
          count: 0
        }]),
        "$compat_setScope 1 __tests__/components/tags-layout.marko_0_count 1"
      ];
      M.s.w();
      $MC = (window.$MC || []).concat(
      {
        "w": [
          ["s0", 0,
          {},
          {
            "f": 1
          }]
        ],
        "t": [
          "__tests__/template.marko"
        ]
      })
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text0
INSERT html/body/#text5
REMOVE #comment before #comment
REMOVE #comment after html/body/#text5
INSERT html/body/#text1
INSERT html/body/#text4
INSERT html/body/#text2
INSERT html/body/#text3
INSERT html/body/button, html/body/div
REMOVE html/body/#text4 after #comment
INSERT html/body/#text4
REMOVE #comment after button
REMOVE #comment after div
REMOVE button after html/body/#text4
REMOVE div after html/body/#text4
INSERT html/body/div/#text1
INSERT html/body/div/#text2
INSERT html/body/div/button
INSERT html/body/div/button/#text
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<!--F#1-->
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      1
    </button>
    <div>
      <button
        id="class"
      >
        0
      </button>
    </div>
    <script>
      WALKER_RUNTIME("M")("s");
      M.s.r = [_ =&gt; (_.a = [0,
        {
          m5c: "s0-0",
          "ConditionalRenderer:#text/2": _._.$compat_renderBody,
          count: 0
        }]),
        "$compat_setScope 1 __tests__/components/tags-layout.marko_0_count 1"
      ];
      M.s.w();
      $MC = (window.$MC || []).concat(
      {
        "w": [
          ["s0", 0,
          {},
          {
            "f": 1
          }]
        ],
        "t": [
          "__tests__/template.marko"
        ]
      })
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
container.querySelector("#class").click();
```
```html
<!--F#1-->
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      1
    </button>
    <div>
      <button
        id="class"
      >
        1
      </button>
    </div>
    <script>
      WALKER_RUNTIME("M")("s");
      M.s.r = [_ =&gt; (_.a = [0,
        {
          m5c: "s0-0",
          "ConditionalRenderer:#text/2": _._.$compat_renderBody,
          count: 0
        }]),
        "$compat_setScope 1 __tests__/components/tags-layout.marko_0_count 1"
      ];
      M.s.w();
      $MC = (window.$MC || []).concat(
      {
        "w": [
          ["s0", 0,
          {},
          {
            "f": 1
          }]
        ],
        "t": [
          "__tests__/template.marko"
        ]
      })
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text0, html/body/div/#text3
REMOVE #text after html/body/div/#text3
REMOVE #text after html/body/div/#text3
REMOVE button after html/body/div/#text3
REMOVE #text after html/body/div/#text3
REMOVE #text after html/body/div/#text3
INSERT html/body/div/#text1
INSERT html/body/div/#text2
INSERT html/body/div/button
INSERT html/body/div/button/#text
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<!--F#1-->
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      2
    </button>
    <div>
      <button
        id="class"
      >
        1
      </button>
    </div>
    <script>
      WALKER_RUNTIME("M")("s");
      M.s.r = [_ =&gt; (_.a = [0,
        {
          m5c: "s0-0",
          "ConditionalRenderer:#text/2": _._.$compat_renderBody,
          count: 0
        }]),
        "$compat_setScope 1 __tests__/components/tags-layout.marko_0_count 1"
      ];
      M.s.w();
      $MC = (window.$MC || []).concat(
      {
        "w": [
          ["s0", 0,
          {},
          {
            "f": 1
          }]
        ],
        "t": [
          "__tests__/template.marko"
        ]
      })
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
container.querySelector("#class").click();
```
```html
<!--F#1-->
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      2
    </button>
    <div>
      <button
        id="class"
      >
        2
      </button>
    </div>
    <script>
      WALKER_RUNTIME("M")("s");
      M.s.r = [_ =&gt; (_.a = [0,
        {
          m5c: "s0-0",
          "ConditionalRenderer:#text/2": _._.$compat_renderBody,
          count: 0
        }]),
        "$compat_setScope 1 __tests__/components/tags-layout.marko_0_count 1"
      ];
      M.s.w();
      $MC = (window.$MC || []).concat(
      {
        "w": [
          ["s0", 0,
          {},
          {
            "f": 1
          }]
        ],
        "t": [
          "__tests__/template.marko"
        ]
      })
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text0, html/body/div/#text3
REMOVE #text after html/body/div/#text3
REMOVE #text after html/body/div/#text3
REMOVE button after html/body/div/#text3
REMOVE #text after html/body/div/#text3
REMOVE #text after html/body/div/#text3
INSERT html/body/div/#text1
INSERT html/body/div/#text2
INSERT html/body/div/button
INSERT html/body/div/button/#text
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<!--F#1-->
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      3
    </button>
    <div>
      <button
        id="class"
      >
        2
      </button>
    </div>
    <script>
      WALKER_RUNTIME("M")("s");
      M.s.r = [_ =&gt; (_.a = [0,
        {
          m5c: "s0-0",
          "ConditionalRenderer:#text/2": _._.$compat_renderBody,
          count: 0
        }]),
        "$compat_setScope 1 __tests__/components/tags-layout.marko_0_count 1"
      ];
      M.s.w();
      $MC = (window.$MC || []).concat(
      {
        "w": [
          ["s0", 0,
          {},
          {
            "f": 1
          }]
        ],
        "t": [
          "__tests__/template.marko"
        ]
      })
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
```