# Render `{"value":"hello"}`

```html
<button>
  Inc
</button>
<!--M_*1 #button/0-->
<!--M_[-->
<div>
  x: 
  <!---->
  0
  <!--M_*3 #text/1-->
</div>
<!--M_]1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  (M._.b = {})[
    "ready:__tests__/child.marko"
    ] = 1;
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      count: 0
    },
    {
      _: _.a,
      "#childScope/1": _.b = {}
    }, _.b]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<!--M_*1 #button/0-->
<!--M_]1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  (M._.b = {})[
    "ready:__tests__/child.marko"
    ] = 1;
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      count: 0
    },
    {
      _: _.a,
      "#childScope/1": _.b = {}
    }, _.b]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment1 after #text
INSERT #comment1
REMOVE #comment after #comment1
REMOVE div after #comment1
REMOVE #text after #comment1
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<!--M_*1 #button/0-->
<!---->
<!---->
<!---->
<script>
  WALKER_RUNTIME("M")("_");
  (M._.b = {})[
    "ready:__tests__/child.marko"
    ] = 1;
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      count: 0
    },
    {
      _: _.a,
      "#childScope/1": _.b = {}
    }, _.b]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #comment1, #text, #comment2, #comment3
REMOVE #comment after #comment3
```

# Render ASYNC
```html
<button>
  Inc
</button>
<!--M_*1 #button/0-->
<!---->
<div>
  : 
</div>
<!---->
<!---->
<script>
  WALKER_RUNTIME("M")("_");
  (M._.b = {})[
    "ready:__tests__/child.marko"
    ] = 1;
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      count: 0
    },
    {
      _: _.a,
      "#childScope/1": _.b = {}
    }, _.b]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div
REMOVE #text after div
```

# Render ASYNC
```html
<button>
  Inc
</button>
<!--M_*1 #button/0-->
<!---->
<div>
  x: 2
</div>
<!---->
<!---->
<script>
  WALKER_RUNTIME("M")("_");
  (M._.b = {})[
    "ready:__tests__/child.marko"
    ] = 1;
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      count: 0
    },
    {
      _: _.a,
      "#childScope/1": _.b = {}
    }, _.b]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/#text2 "" => "2"
UPDATE div/#text0 "" => "x"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<!--M_*1 #button/0-->
<!--M_]1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  (M._.b = {})[
    "ready:__tests__/child.marko"
    ] = 1;
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      count: 0
    },
    {
      _: _.a,
      "#childScope/1": _.b = {}
    }, _.b]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #comment1
REMOVE #comment after #comment1
REMOVE div after #comment1
REMOVE #comment after #comment1
REMOVE #comment after #comment1
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<!--M_*1 #button/0-->
<!---->
<div>
  x: 4
</div>
<!---->
<!---->
<script>
  WALKER_RUNTIME("M")("_");
  (M._.b = {})[
    "ready:__tests__/child.marko"
    ] = 1;
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      count: 0
    },
    {
      _: _.a,
      "#childScope/1": _.b = {}
    }, _.b]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #comment1, #text, #comment2, #comment3
REMOVE #comment after #comment3
INSERT div
REMOVE #text after div
UPDATE div/#text2 "" => "4"
UPDATE div/#text0 "" => "x"
```