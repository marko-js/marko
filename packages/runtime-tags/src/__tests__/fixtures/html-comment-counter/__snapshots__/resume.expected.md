# Render
```html
<div>
  <button>
    0
    <!--M_*1 #text/1-->
  </button>
  <!--M_*1 #button/0-->
  <!--0 + 0 = 0-->
  <!--M_*1 #comment/2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0
    }]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    1
    <!--M_*1 #text/1-->
  </button>
  <!--M_*1 #button/0-->
  <!--1 + 1 = 2-->
  <!--M_*1 #comment/2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0
    }]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/button/#text "0" => "1"
UPDATE div/#comment1 "0 + 0 = 0" => "1 + 1 = 2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    2
    <!--M_*1 #text/1-->
  </button>
  <!--M_*1 #button/0-->
  <!--2 + 2 = 4-->
  <!--M_*1 #comment/2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0
    }]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/button/#text "1" => "2"
UPDATE div/#comment1 "1 + 1 = 2" => "2 + 2 = 4"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    3
    <!--M_*1 #text/1-->
  </button>
  <!--M_*1 #button/0-->
  <!--3 + 3 = 6-->
  <!--M_*1 #comment/2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0
    }]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/button/#text "2" => "3"
UPDATE div/#comment1 "2 + 2 = 4" => "3 + 3 = 6"
```