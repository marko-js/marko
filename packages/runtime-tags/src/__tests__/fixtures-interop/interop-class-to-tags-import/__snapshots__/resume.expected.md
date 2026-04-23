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
    <button
      data-parent="0"
      id="tags"
    >
      0
    </button>
    <script>
      WALKER_RUNTIME("M")("s");
      M.s.r = [_ =&gt; (_.a = [0,
        {
          m5c: "s0-1",
          count: 0
        }]),
        "$compat_setScope 1 __tests__/components/tags-counter.marko_0_count 1"
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
REMOVE #comment before html
REMOVE #comment after html/body/#text5
INSERT html/body/#text1
INSERT html/body/#text4
INSERT html/body/#text2
INSERT html/body/#text3
REMOVE #comment after html/body/#text2
REMOVE #comment after #comment
REMOVE #comment after button
INSERT html/body/button1
REMOVE html/body/#text4 after html/body/#text3
INSERT html/body/#text4
REMOVE button after html/body/#text2
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
    <button
      data-parent="0"
      id="tags"
    >
      1
    </button>
    <script>
      WALKER_RUNTIME("M")("s");
      M.s.r = [_ =&gt; (_.a = [0,
        {
          m5c: "s0-1",
          count: 0
        }]),
        "$compat_setScope 1 __tests__/components/tags-counter.marko_0_count 1"
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
UPDATE html/body/button1/#text "0" => "1"
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
    <button
      data-parent="1"
      id="tags"
    >
      1
    </button>
    <script>
      WALKER_RUNTIME("M")("s");
      M.s.r = [_ =&gt; (_.a = [0,
        {
          m5c: "s0-1",
          count: 0
        }]),
        "$compat_setScope 1 __tests__/components/tags-counter.marko_0_count 1"
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
UPDATE html/body/button1[data-parent] "0" => "1"
UPDATE html/body/button0/#text "0" => "1"
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
    <button
      data-parent="1"
      id="tags"
    >
      2
    </button>
    <script>
      WALKER_RUNTIME("M")("s");
      M.s.r = [_ =&gt; (_.a = [0,
        {
          m5c: "s0-1",
          count: 0
        }]),
        "$compat_setScope 1 __tests__/components/tags-counter.marko_0_count 1"
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
UPDATE html/body/button1/#text "1" => "2"
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
    <button
      data-parent="2"
      id="tags"
    >
      2
    </button>
    <script>
      WALKER_RUNTIME("M")("s");
      M.s.r = [_ =&gt; (_.a = [0,
        {
          m5c: "s0-1",
          count: 0
        }]),
        "$compat_setScope 1 __tests__/components/tags-counter.marko_0_count 1"
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
UPDATE html/body/button1[data-parent] "1" => "2"
UPDATE html/body/button0/#text "1" => "2"
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
    <button
      data-parent="2"
      id="tags"
    >
      3
    </button>
    <script>
      WALKER_RUNTIME("M")("s");
      M.s.r = [_ =&gt; (_.a = [0,
        {
          m5c: "s0-1",
          count: 0
        }]),
        "$compat_setScope 1 __tests__/components/tags-counter.marko_0_count 1"
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
UPDATE html/body/button1/#text "2" => "3"
```