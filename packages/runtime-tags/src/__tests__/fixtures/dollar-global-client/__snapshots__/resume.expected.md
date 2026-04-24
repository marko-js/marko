# Render `{"$global":{"x":1,"serializedGlobals":["x"]}}`

```html
<div>
  <!--M_|1 #text/0-->
  <span
    class="hidden"
  >
    1
  </span>
  <!--M_|1 #text/1 2-->
  <button>
    Toggle
  </button>
  <!--M_*1 #button/2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [
    {
      x: 1
    },
    {
      show: !1
    }]),
    "__tests__/template.marko_0_show 1"
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
  <span>
    1
  </span>
  <!--M_|1 #text/1 2-->
  <button>
    Toggle
  </button>
  <!--M_*1 #button/2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [
    {
      x: 1
    },
    {
      show: !1
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/span
REMOVE #comment after div/span
REMOVE div/#comment0 after span
INSERT div/#comment0
REMOVE span after div/#comment0
UPDATE div/span/#text " " => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <!--M_|1 #text/0-->
  <span
    class="hidden"
  >
    1
  </span>
  <button>
    Toggle
  </button>
  <!--M_*1 #button/2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [
    {
      x: 1
    },
    {
      show: !1
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/#comment0
REMOVE span after div/#comment0
INSERT div/span
REMOVE #comment after div/span
UPDATE div/span/#text " " => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <span>
    1
  </span>
  <!--M_|1 #text/1 2-->
  <button>
    Toggle
  </button>
  <!--M_*1 #button/2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [
    {
      x: 1
    },
    {
      show: !1
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/span
REMOVE #comment after div/span
INSERT div/#comment0
REMOVE span after div/#comment0
UPDATE div/span/#text " " => "1"
```