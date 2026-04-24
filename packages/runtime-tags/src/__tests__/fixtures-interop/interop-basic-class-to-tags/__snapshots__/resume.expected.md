# Render
```html
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
REMOVE #comment after #comment
REMOVE #comment after button
INSERT button1
REMOVE #text4 after #text3
INSERT #text4
REMOVE button after #text2
```

# Render
```js
container.querySelector("#tags").click();
```
```html
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
```

# Mutations
```
UPDATE button1/#text "0" => "1"
```

# Render
```js
container.querySelector("#class").click();
```
```html
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
```

# Mutations
```
UPDATE button1[data-parent] "0" => "1"
UPDATE button0/#text "0" => "1"
```

# Render
```js
container.querySelector("#tags").click();
```
```html
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
```

# Mutations
```
UPDATE button1/#text "1" => "2"
```

# Render
```js
container.querySelector("#class").click();
```
```html
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
```

# Mutations
```
UPDATE button1[data-parent] "1" => "2"
UPDATE button0/#text "1" => "2"
```

# Render
```js
container.querySelector("#tags").click();
```
```html
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
```

# Mutations
```
UPDATE button1/#text "2" => "3"
```