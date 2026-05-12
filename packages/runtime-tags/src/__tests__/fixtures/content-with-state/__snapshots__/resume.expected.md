# Render
```html
<button>
  click
</button>
<!--M_*4 #button/0-->
<span>
  0
  <!--M_*5 #text/0-->
</span>
<button
  id="increment"
>
  click
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      count: 0,
      "ClosureScopes:count": _.c = new Set
    }, 2,
    {}, _.d = {
      _: _.a
    }], (_.c).add(_.d), _.b),
    "__tests__/tags/outer.marko_1 4 __tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("#increment").click();
```
```html
<button>
  click
</button>
<!--M_*4 #button/0-->
<span>
  1
  <!--M_*5 #text/0-->
</span>
<button
  id="increment"
>
  click
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      count: 0,
      "ClosureScopes:count": _.c = new Set
    }, 2,
    {}, _.d = {
      _: _.a
    }], (_.c).add(_.d), _.b),
    "__tests__/tags/outer.marko_1 4 __tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE span/#text "0" => "1"
```

# Render
```js
container.querySelector("#increment").click();
```
```html
<button>
  click
</button>
<!--M_*4 #button/0-->
<span>
  2
  <!--M_*5 #text/0-->
</span>
<button
  id="increment"
>
  click
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      count: 0,
      "ClosureScopes:count": _.c = new Set
    }, 2,
    {}, _.d = {
      _: _.a
    }], (_.c).add(_.d), _.b),
    "__tests__/tags/outer.marko_1 4 __tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE span/#text "1" => "2"
```

# Render
```js
container.querySelector("#increment").click();
```
```html
<button>
  click
</button>
<!--M_*4 #button/0-->
<span>
  3
  <!--M_*5 #text/0-->
</span>
<button
  id="increment"
>
  click
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      count: 0,
      "ClosureScopes:count": _.c = new Set
    }, 2,
    {}, _.d = {
      _: _.a
    }], (_.c).add(_.d), _.b),
    "__tests__/tags/outer.marko_1 4 __tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE span/#text "2" => "3"
```