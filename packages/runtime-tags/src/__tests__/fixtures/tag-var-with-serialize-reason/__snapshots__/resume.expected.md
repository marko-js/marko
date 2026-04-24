# Render
```html
<button>
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<span />
<!--M_|2 #text/0 3-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#scopeOffset/3": 4,
      count: 1,
      "#childScope/2": _.a = {}
    }, _.a], _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_x/var"
      ](_.c), _.b),
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
  2
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<span />
<!--M_|2 #text/0 3-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#scopeOffset/3": 4,
      count: 1,
      "#childScope/2": _.a = {}
    }, _.a], _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_x/var"
      ](_.c), _.b),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "1" => "2"
INSERT span
REMOVE span after span
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
<span />
<!--M_|2 #text/0 3-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#scopeOffset/3": 4,
      count: 1,
      "#childScope/2": _.a = {}
    }, _.a], _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_x/var"
      ](_.c), _.b),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  4
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<span />
<!--M_|2 #text/0 3-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#scopeOffset/3": 4,
      count: 1,
      "#childScope/2": _.a = {}
    }, _.a], _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_x/var"
      ](_.c), _.b),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "3" => "4"
```