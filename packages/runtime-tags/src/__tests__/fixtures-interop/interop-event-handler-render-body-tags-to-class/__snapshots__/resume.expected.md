# Render
```html
<!--M_[-->
<button>
  0
  <!--M_*3 #text/0-->
</button>
<!--M_]1 #text/0 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      "ConditionalRenderer:#text/0": _._[
        "__tests__/components/my-button.marko"
        ],
      count: 0,
      "ClosureScopes:count": _.d = new Set
    },
    {
      m5c: "_0",
      m5i: _.b = {}
    }, _.e = {
      m5c: "_0-1",
      _: _.a
    }], _.a["ConditionalRenderer:#text/0"] = _._.$compat_renderer(_.a[
      "ConditionalRenderer:#text/0"]), _.b.renderBody = _._[
      "__tests__/template.marko_1_content"
      ](_.a), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.a]),
    "$compat_setScope 3"
  ];
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
            1
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
      "__tests__/components/my-button.marko"
    ]
  });
  M._.r.push("$compat_setScope 2");
  M._.w()
</script>
```

# Mutations
```
INSERT #text2
INSERT #text0
INSERT #text1
REMOVE #comment after #comment0
REMOVE #comment after #text1
INSERT button/#text0
INSERT button/#text4
INSERT button/#text1
INSERT button/#text3
REMOVE #comment after button/#text1
REMOVE #comment after button/#comment
REMOVE button/#text4 after button/#text3
INSERT button/#text4
```

# Render
```js
container.querySelector("button").click();
```
```html
<!--M_[-->
<button>
  1
  <!--M_*3 #text/0-->
</button>
<!--M_]1 #text/0 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      "ConditionalRenderer:#text/0": _._[
        "__tests__/components/my-button.marko"
        ],
      count: 0,
      "ClosureScopes:count": _.d = new Set
    },
    {
      m5c: "_0",
      m5i: _.b = {}
    }, _.e = {
      m5c: "_0-1",
      _: _.a
    }], _.a["ConditionalRenderer:#text/0"] = _._.$compat_renderer(_.a[
      "ConditionalRenderer:#text/0"]), _.b.renderBody = _._[
      "__tests__/template.marko_1_content"
      ](_.a), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.a]),
    "$compat_setScope 3"
  ];
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
            1
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
      "__tests__/components/my-button.marko"
    ]
  });
  M._.r.push("$compat_setScope 2");
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text2 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!--M_[-->
<button>
  2
  <!--M_*3 #text/0-->
</button>
<!--M_]1 #text/0 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      "ConditionalRenderer:#text/0": _._[
        "__tests__/components/my-button.marko"
        ],
      count: 0,
      "ClosureScopes:count": _.d = new Set
    },
    {
      m5c: "_0",
      m5i: _.b = {}
    }, _.e = {
      m5c: "_0-1",
      _: _.a
    }], _.a["ConditionalRenderer:#text/0"] = _._.$compat_renderer(_.a[
      "ConditionalRenderer:#text/0"]), _.b.renderBody = _._[
      "__tests__/template.marko_1_content"
      ](_.a), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.a]),
    "$compat_setScope 3"
  ];
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
            1
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
      "__tests__/components/my-button.marko"
    ]
  });
  M._.r.push("$compat_setScope 2");
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text2 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!--M_[-->
<button>
  3
  <!--M_*3 #text/0-->
</button>
<!--M_]1 #text/0 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      "ConditionalRenderer:#text/0": _._[
        "__tests__/components/my-button.marko"
        ],
      count: 0,
      "ClosureScopes:count": _.d = new Set
    },
    {
      m5c: "_0",
      m5i: _.b = {}
    }, _.e = {
      m5c: "_0-1",
      _: _.a
    }], _.a["ConditionalRenderer:#text/0"] = _._.$compat_renderer(_.a[
      "ConditionalRenderer:#text/0"]), _.b.renderBody = _._[
      "__tests__/template.marko_1_content"
      ](_.a), (_.d).add(_.e), _.c), _ =&gt; (_.f = [-3, _.a]),
    "$compat_setScope 3"
  ];
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
            1
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
      "__tests__/components/my-button.marko"
    ]
  });
  M._.r.push("$compat_setScope 2");
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text2 "2" => "3"
```