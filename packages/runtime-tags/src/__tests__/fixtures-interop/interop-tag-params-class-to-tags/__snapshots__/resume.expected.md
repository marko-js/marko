# Render
```html
<button
  id="tags"
>
  0
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    1 * 0 = 0
  </button>
</div>
<script>
  WALKER_RUNTIME("M")("s");
  M.s.r = [_ =&gt; (_.a = [0,
    {
      m5c: "s0-0",
      "ConditionalRenderer:#text/2": _._.$compat_renderBody,
      input_content: _._.$compat_renderBody,
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
```

# Mutations
```
INSERT #text0
INSERT #text5
REMOVE #comment before #text0
REMOVE #comment after #text5
INSERT #text1
INSERT #text4
INSERT #text2
INSERT #text3
REMOVE #comment after #text2
REMOVE #comment after div
REMOVE #comment after button
INSERT button, div
REMOVE #text4 after #text3
INSERT #text4
REMOVE button after #text2
REMOVE div after #text2
INSERT div/#text1
INSERT div/#text2
INSERT div/h1
INSERT div/h1/#text
INSERT div/button
INSERT div/button/#text0
INSERT div/button/#text1
INSERT div/button/#text2
INSERT div/button/#text3
INSERT div/button/#text4
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  1
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    1 * 1 = 1
  </button>
</div>
<script>
  WALKER_RUNTIME("M")("s");
  M.s.r = [_ =&gt; (_.a = [0,
    {
      m5c: "s0-0",
      "ConditionalRenderer:#text/2": _._.$compat_renderBody,
      input_content: _._.$compat_renderBody,
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
```

# Mutations
```
UPDATE button/#text "0" => "1"
UPDATE div/button/#text2 "0" => "1"
UPDATE div/button/#text4 "0" => "1"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<button
  id="tags"
>
  1
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    2 * 1 = 2
  </button>
</div>
<script>
  WALKER_RUNTIME("M")("s");
  M.s.r = [_ =&gt; (_.a = [0,
    {
      m5c: "s0-0",
      "ConditionalRenderer:#text/2": _._.$compat_renderBody,
      input_content: _._.$compat_renderBody,
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
```

# Mutations
```
INSERT div/#text0, div/#text3
REMOVE #text after div/#text3
REMOVE #text after div/#text3
REMOVE h1 after div/#text3
REMOVE button after div/#text3
REMOVE #text after div/#text3
REMOVE #text after div/#text3
INSERT div/#text1
INSERT div/#text2
INSERT div/h1
INSERT div/h1/#text
INSERT div/button
INSERT div/button/#text0
INSERT div/button/#text1
INSERT div/button/#text2
INSERT div/button/#text3
INSERT div/button/#text4
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  2
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    2 * 2 = 4
  </button>
</div>
<script>
  WALKER_RUNTIME("M")("s");
  M.s.r = [_ =&gt; (_.a = [0,
    {
      m5c: "s0-0",
      "ConditionalRenderer:#text/2": _._.$compat_renderBody,
      input_content: _._.$compat_renderBody,
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
```

# Mutations
```
UPDATE button/#text "1" => "2"
UPDATE div/button/#text2 "1" => "2"
UPDATE div/button/#text4 "2" => "4"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<button
  id="tags"
>
  2
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    3 * 2 = 6
  </button>
</div>
<script>
  WALKER_RUNTIME("M")("s");
  M.s.r = [_ =&gt; (_.a = [0,
    {
      m5c: "s0-0",
      "ConditionalRenderer:#text/2": _._.$compat_renderBody,
      input_content: _._.$compat_renderBody,
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
```

# Mutations
```
INSERT div/#text0, div/#text3
REMOVE #text after div/#text3
REMOVE #text after div/#text3
REMOVE h1 after div/#text3
REMOVE button after div/#text3
REMOVE #text after div/#text3
REMOVE #text after div/#text3
INSERT div/#text1
INSERT div/#text2
INSERT div/h1
INSERT div/h1/#text
INSERT div/button
INSERT div/button/#text0
INSERT div/button/#text1
INSERT div/button/#text2
INSERT div/button/#text3
INSERT div/button/#text4
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  3
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    3 * 3 = 9
  </button>
</div>
<script>
  WALKER_RUNTIME("M")("s");
  M.s.r = [_ =&gt; (_.a = [0,
    {
      m5c: "s0-0",
      "ConditionalRenderer:#text/2": _._.$compat_renderBody,
      input_content: _._.$compat_renderBody,
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
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE div/button/#text2 "2" => "3"
UPDATE div/button/#text4 "6" => "9"
```