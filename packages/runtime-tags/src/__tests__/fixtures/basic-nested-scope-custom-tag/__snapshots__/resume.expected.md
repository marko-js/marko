# Render
```html
<button>
  0
  <!--M_*3 #text/1-->
</button>
<!--M_*3 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      count: 0,
      "ClosureScopes:count": _.c = new Set
    }, 1, _.d = {
      _: _.a
    }], (_.c).add(_.d), _.b),
    "__tests__/template.marko_1_count 3"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  1
  <!--M_*3 #text/1-->
</button>
<!--M_*3 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      count: 0,
      "ClosureScopes:count": _.c = new Set
    }, 1, _.d = {
      _: _.a
    }], (_.c).add(_.d), _.b),
    "__tests__/template.marko_1_count 3"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2
  <!--M_*3 #text/1-->
</button>
<!--M_*3 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      count: 0,
      "ClosureScopes:count": _.c = new Set
    }, 1, _.d = {
      _: _.a
    }], (_.c).add(_.d), _.b),
    "__tests__/template.marko_1_count 3"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  3
  <!--M_*3 #text/1-->
</button>
<!--M_*3 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      count: 0,
      "ClosureScopes:count": _.c = new Set
    }, 1, _.d = {
      _: _.a
    }], (_.c).add(_.d), _.b),
    "__tests__/template.marko_1_count 3"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "2" => "3"
```