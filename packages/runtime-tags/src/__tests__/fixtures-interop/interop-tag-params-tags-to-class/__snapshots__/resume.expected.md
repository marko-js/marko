# Render
```html
<button
  id="class"
>
  0
</button>
<div>
  <h1>
    hello
    <!--M_*3 #text/0-->
  </h1>
  <button
    id="tags"
  >
    1
    <!--M_*3 #text/2-->
     * 
    <!---->
    0
    <!--M_*3 #text/3-->
     = 
    <!---->
    0
    <!--M_*3 #text/4-->
  </button>
  <!--M_*3 #button/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.b = {
      multiplier: 1,
      "ClosureScopes:multiplier": _.d = new Set
    },
    {
      m5c: "_0",
      m5i: _.a = {}
    }, _.e = {
      m5c: "_0-2",
      baseCount: 0,
      _: _.b
    }], _.a.renderBody = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.b]),
    "$compat_setScope 3 __tests__/template.marko_1_multiplier 3"
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
  <h1>
    hello
    <!--M_*3 #text/0-->
  </h1>
  <button
    id="tags"
  >
    2
    <!--M_*3 #text/2-->
     * 
    <!---->
    0
    <!--M_*3 #text/3-->
     = 
    <!---->
    0
    <!--M_*3 #text/4-->
  </button>
  <!--M_*3 #button/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.b = {
      multiplier: 1,
      "ClosureScopes:multiplier": _.d = new Set
    },
    {
      m5c: "_0",
      m5i: _.a = {}
    }, _.e = {
      m5c: "_0-2",
      baseCount: 0,
      _: _.b
    }], _.a.renderBody = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.b]),
    "$compat_setScope 3 __tests__/template.marko_1_multiplier 3"
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
UPDATE div/button/#text0 "1" => "2"
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
  <h1>
    hello
    <!--M_*3 #text/0-->
  </h1>
  <button
    id="tags"
  >
    2
    <!--M_*3 #text/2-->
     * 
    <!---->
    1
    <!--M_*3 #text/3-->
     = 
    <!---->
    2
    <!--M_*3 #text/4-->
  </button>
  <!--M_*3 #button/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.b = {
      multiplier: 1,
      "ClosureScopes:multiplier": _.d = new Set
    },
    {
      m5c: "_0",
      m5i: _.a = {}
    }, _.e = {
      m5c: "_0-2",
      baseCount: 0,
      _: _.b
    }], _.a.renderBody = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.b]),
    "$compat_setScope 3 __tests__/template.marko_1_multiplier 3"
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
UPDATE div/button/#text2 "0" => "1"
UPDATE div/button/#text4 "0" => "2"
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
  <h1>
    hello
    <!--M_*3 #text/0-->
  </h1>
  <button
    id="tags"
  >
    3
    <!--M_*3 #text/2-->
     * 
    <!---->
    1
    <!--M_*3 #text/3-->
     = 
    <!---->
    3
    <!--M_*3 #text/4-->
  </button>
  <!--M_*3 #button/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.b = {
      multiplier: 1,
      "ClosureScopes:multiplier": _.d = new Set
    },
    {
      m5c: "_0",
      m5i: _.a = {}
    }, _.e = {
      m5c: "_0-2",
      baseCount: 0,
      _: _.b
    }], _.a.renderBody = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.b]),
    "$compat_setScope 3 __tests__/template.marko_1_multiplier 3"
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
UPDATE div/button/#text0 "2" => "3"
UPDATE div/button/#text4 "2" => "3"
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
  <h1>
    hello
    <!--M_*3 #text/0-->
  </h1>
  <button
    id="tags"
  >
    3
    <!--M_*3 #text/2-->
     * 
    <!---->
    2
    <!--M_*3 #text/3-->
     = 
    <!---->
    6
    <!--M_*3 #text/4-->
  </button>
  <!--M_*3 #button/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.b = {
      multiplier: 1,
      "ClosureScopes:multiplier": _.d = new Set
    },
    {
      m5c: "_0",
      m5i: _.a = {}
    }, _.e = {
      m5c: "_0-2",
      baseCount: 0,
      _: _.b
    }], _.a.renderBody = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.b]),
    "$compat_setScope 3 __tests__/template.marko_1_multiplier 3"
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
UPDATE div/button/#text2 "1" => "2"
UPDATE div/button/#text4 "3" => "6"
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
  <h1>
    hello
    <!--M_*3 #text/0-->
  </h1>
  <button
    id="tags"
  >
    4
    <!--M_*3 #text/2-->
     * 
    <!---->
    2
    <!--M_*3 #text/3-->
     = 
    <!---->
    8
    <!--M_*3 #text/4-->
  </button>
  <!--M_*3 #button/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.b = {
      multiplier: 1,
      "ClosureScopes:multiplier": _.d = new Set
    },
    {
      m5c: "_0",
      m5i: _.a = {}
    }, _.e = {
      m5c: "_0-2",
      baseCount: 0,
      _: _.b
    }], _.a.renderBody = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.b]),
    "$compat_setScope 3 __tests__/template.marko_1_multiplier 3"
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
UPDATE div/button/#text0 "3" => "4"
UPDATE div/button/#text4 "6" => "8"
```