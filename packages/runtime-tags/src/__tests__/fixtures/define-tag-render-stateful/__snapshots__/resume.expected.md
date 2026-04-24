# Render
```html
<button>
  0
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<div>
  Hello Ryan 
  <!---->
  0
  <!--M_*2 #text/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      count: 0,
      "#childScope/2": _.a = {}
    }, _.a]),
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
<button>
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<div>
  Hello Ryan 
  <!---->
  1
  <!--M_*2 #text/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      count: 0,
      "#childScope/2": _.a = {}
    }, _.a]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "0" => "1"
UPDATE div/#text1 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<div>
  Hello Ryan 
  <!---->
  2
  <!--M_*2 #text/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      count: 0,
      "#childScope/2": _.a = {}
    }, _.a]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "1" => "2"
UPDATE div/#text1 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  3
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<div>
  Hello Ryan 
  <!---->
  3
  <!--M_*2 #text/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      count: 0,
      "#childScope/2": _.a = {}
    }, _.a]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE div/#text1 "2" => "3"
```