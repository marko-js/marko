# Render
```html
<button>
  0,0
  <!--M_*1 #text/3-->
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#scopeOffset/1": 3,
      a: 0,
      b: 0,
      "#childScope/0": _.a = {}
    }, _.a], _.a["#TagVariableChange"] = _._[
      "__tests__/template.marko_1/valueChange"
      ](_.a), _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_a/var"
      ](_.c), _.b),
    "__tests__/template.marko_0_a_b 1"
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
  0,1
  <!--M_*1 #text/3-->
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#scopeOffset/1": 3,
      a: 0,
      b: 0,
      "#childScope/0": _.a = {}
    }, _.a], _.a["#TagVariableChange"] = _._[
      "__tests__/template.marko_1/valueChange"
      ](_.a), _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_a/var"
      ](_.c), _.b),
    "__tests__/template.marko_0_a_b 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "0,0" => "0,1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  1,2
  <!--M_*1 #text/3-->
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#scopeOffset/1": 3,
      a: 0,
      b: 0,
      "#childScope/0": _.a = {}
    }, _.a], _.a["#TagVariableChange"] = _._[
      "__tests__/template.marko_1/valueChange"
      ](_.a), _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_a/var"
      ](_.c), _.b),
    "__tests__/template.marko_0_a_b 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "0,1" => "1,2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2,3
  <!--M_*1 #text/3-->
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#scopeOffset/1": 3,
      a: 0,
      b: 0,
      "#childScope/0": _.a = {}
    }, _.a], _.a["#TagVariableChange"] = _._[
      "__tests__/template.marko_1/valueChange"
      ](_.a), _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_a/var"
      ](_.c), _.b),
    "__tests__/template.marko_0_a_b 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "1,2" => "2,3"
```