# Render
```html
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
INSERT div/button
INSERT div/button/#text
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
```

# Mutations
```
UPDATE button/#text "0" => "1"
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
```

# Mutations
```
INSERT div/#text0, div/#text3
REMOVE #text after div/#text3
REMOVE #text after div/#text3
REMOVE button after div/#text3
REMOVE #text after div/#text3
REMOVE #text after div/#text3
INSERT div/#text1
INSERT div/#text2
INSERT div/button
INSERT div/button/#text
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
```

# Mutations
```
UPDATE button/#text "1" => "2"
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
```

# Mutations
```
INSERT div/#text0, div/#text3
REMOVE #text after div/#text3
REMOVE #text after div/#text3
REMOVE button after div/#text3
REMOVE #text after div/#text3
REMOVE #text after div/#text3
INSERT div/#text1
INSERT div/#text2
INSERT div/button
INSERT div/button/#text
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
```

# Mutations
```
UPDATE button/#text "2" => "3"
```