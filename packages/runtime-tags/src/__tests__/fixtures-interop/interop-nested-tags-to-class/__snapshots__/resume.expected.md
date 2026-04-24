# Render
```html
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
  M._.r = [_ =&gt; (_.c = [0, _.b = {
      count: 0,
      "ClosureScopes:count": _.d = new Set
    },
    {
      m5c: "_0",
      m5i: _.a = {}
    }, _.e = {
      m5c: "_0-2",
      _: _.b
    }], _.a.renderBody = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.b]),
    "$compat_setScope 3 __tests__/template.marko_1_count 3"
  ];
  M._.w();
  $MC = (window.$MC || []).concat(
  {
    "p": "_",
    "w": [
      ["_0", 0, 2,
      {
        "f": 1,
        "r": [
          "__tests__/template.marko_1_content",
          1
        ]
      }]
    ],
    "t": [
      "__tests__/components/class-layout.marko"
    ]
  });
  M._.r.push("$compat_setScope 2");
  M._.w()
</script>
```

# Mutations
```
INSERT #text0
INSERT #text1
REMOVE #comment before #text0
REMOVE #comment after #text1
INSERT div/#text0
INSERT div/#text3
INSERT div/#text1
INSERT div/#text2
REMOVE #comment after div/#text1
REMOVE #comment after div/#comment
REMOVE div/#text3 after div/#text2
INSERT div/#text3
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
  M._.r = [_ =&gt; (_.c = [0, _.b = {
      count: 0,
      "ClosureScopes:count": _.d = new Set
    },
    {
      m5c: "_0",
      m5i: _.a = {}
    }, _.e = {
      m5c: "_0-2",
      _: _.b
    }], _.a.renderBody = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.b]),
    "$compat_setScope 3 __tests__/template.marko_1_count 3"
  ];
  M._.w();
  $MC = (window.$MC || []).concat(
  {
    "p": "_",
    "w": [
      ["_0", 0, 2,
      {
        "f": 1,
        "r": [
          "__tests__/template.marko_1_content",
          1
        ]
      }]
    ],
    "t": [
      "__tests__/components/class-layout.marko"
    ]
  });
  M._.r.push("$compat_setScope 2");
  M._.w()
</script>
```

# Mutations
```
UPDATE div/button/#text "0" => "1"
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
  M._.r = [_ =&gt; (_.c = [0, _.b = {
      count: 0,
      "ClosureScopes:count": _.d = new Set
    },
    {
      m5c: "_0",
      m5i: _.a = {}
    }, _.e = {
      m5c: "_0-2",
      _: _.b
    }], _.a.renderBody = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.b]),
    "$compat_setScope 3 __tests__/template.marko_1_count 3"
  ];
  M._.w();
  $MC = (window.$MC || []).concat(
  {
    "p": "_",
    "w": [
      ["_0", 0, 2,
      {
        "f": 1,
        "r": [
          "__tests__/template.marko_1_content",
          1
        ]
      }]
    ],
    "t": [
      "__tests__/components/class-layout.marko"
    ]
  });
  M._.r.push("$compat_setScope 2");
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "0" => "1"
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
  M._.r = [_ =&gt; (_.c = [0, _.b = {
      count: 0,
      "ClosureScopes:count": _.d = new Set
    },
    {
      m5c: "_0",
      m5i: _.a = {}
    }, _.e = {
      m5c: "_0-2",
      _: _.b
    }], _.a.renderBody = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.b]),
    "$compat_setScope 3 __tests__/template.marko_1_count 3"
  ];
  M._.w();
  $MC = (window.$MC || []).concat(
  {
    "p": "_",
    "w": [
      ["_0", 0, 2,
      {
        "f": 1,
        "r": [
          "__tests__/template.marko_1_content",
          1
        ]
      }]
    ],
    "t": [
      "__tests__/components/class-layout.marko"
    ]
  });
  M._.r.push("$compat_setScope 2");
  M._.w()
</script>
```

# Mutations
```
UPDATE div/button/#text "1" => "2"
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
  M._.r = [_ =&gt; (_.c = [0, _.b = {
      count: 0,
      "ClosureScopes:count": _.d = new Set
    },
    {
      m5c: "_0",
      m5i: _.a = {}
    }, _.e = {
      m5c: "_0-2",
      _: _.b
    }], _.a.renderBody = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.b]),
    "$compat_setScope 3 __tests__/template.marko_1_count 3"
  ];
  M._.w();
  $MC = (window.$MC || []).concat(
  {
    "p": "_",
    "w": [
      ["_0", 0, 2,
      {
        "f": 1,
        "r": [
          "__tests__/template.marko_1_content",
          1
        ]
      }]
    ],
    "t": [
      "__tests__/components/class-layout.marko"
    ]
  });
  M._.r.push("$compat_setScope 2");
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "1" => "2"
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
  M._.r = [_ =&gt; (_.c = [0, _.b = {
      count: 0,
      "ClosureScopes:count": _.d = new Set
    },
    {
      m5c: "_0",
      m5i: _.a = {}
    }, _.e = {
      m5c: "_0-2",
      _: _.b
    }], _.a.renderBody = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.b]),
    "$compat_setScope 3 __tests__/template.marko_1_count 3"
  ];
  M._.w();
  $MC = (window.$MC || []).concat(
  {
    "p": "_",
    "w": [
      ["_0", 0, 2,
      {
        "f": 1,
        "r": [
          "__tests__/template.marko_1_content",
          1
        ]
      }]
    ],
    "t": [
      "__tests__/components/class-layout.marko"
    ]
  });
  M._.r.push("$compat_setScope 2");
  M._.w()
</script>
```

# Mutations
```
UPDATE div/button/#text "2" => "3"
```