# Render
```html
<div>
  1
  <!--M_*2 #text/0-->
</div>
<button>
  1
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      x: 1,
      "#childScope/0": _.a = {}
    }, _.a]),
    "__tests__/template.marko_0_x 1"
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
  2
  <!--M_*2 #text/0-->
</div>
<button>
  2
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      x: 1,
      "#childScope/0": _.a = {}
    }, _.a]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/#text "1" => "2"
UPDATE button/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  3
  <!--M_*2 #text/0-->
</div>
<button>
  3
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      x: 1,
      "#childScope/0": _.a = {}
    }, _.a]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/#text "2" => "3"
UPDATE button/#text "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  4
  <!--M_*2 #text/0-->
</div>
<button>
  4
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      x: 1,
      "#childScope/0": _.a = {}
    }, _.a]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/#text "3" => "4"
UPDATE button/#text "3" => "4"
```