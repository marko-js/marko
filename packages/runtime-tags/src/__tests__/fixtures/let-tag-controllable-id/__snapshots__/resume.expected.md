# Render
```html
<button>
  1
  <!--M_*1 #text/1-->
  |
  <!---->
  1
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      y: 1
    }], _.a.handler = _.a["TagVariableChange:y"] = _._[
      "__tests__/template.marko_0/handler"
      ](_.a), _.b),
    "__tests__/template.marko_0_y 1"
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
  3
  <!--M_*1 #text/1-->
  |
  <!---->
  3
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      y: 1
    }], _.a.handler = _.a["TagVariableChange:y"] = _._[
      "__tests__/template.marko_0/handler"
      ](_.a), _.b),
    "__tests__/template.marko_0_y 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text0 "1" => "3"
UPDATE button/#text2 "1" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  5
  <!--M_*1 #text/1-->
  |
  <!---->
  5
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      y: 1
    }], _.a.handler = _.a["TagVariableChange:y"] = _._[
      "__tests__/template.marko_0/handler"
      ](_.a), _.b),
    "__tests__/template.marko_0_y 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text0 "3" => "5"
UPDATE button/#text2 "3" => "5"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  7
  <!--M_*1 #text/1-->
  |
  <!---->
  7
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      y: 1
    }], _.a.handler = _.a["TagVariableChange:y"] = _._[
      "__tests__/template.marko_0/handler"
      ](_.a), _.b),
    "__tests__/template.marko_0_y 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text0 "5" => "7"
UPDATE button/#text2 "5" => "7"
```