# Render
```html
<div>
  <!--M_[-->
  Hello!
  <!--M_]1 #text/0 2-->
  <button>
    Toggle
  </button>
  <!--M_*1 #button/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      show: !0
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/#text1
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <!--M_]1 #text/0 2-->
  <button>
    Toggle
  </button>
  <!--M_*1 #button/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      show: !0
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE div/#comment0 after #text
INSERT div/#comment0
REMOVE #comment after div/#comment0
REMOVE #text after div/#comment0
REMOVE #text after div/#comment0
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  Hello!
  <button>
    Toggle
  </button>
  <!--M_*1 #button/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      show: !0
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/#text
REMOVE #comment after div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <!--M_]1 #text/0 2-->
  <button>
    Toggle
  </button>
  <!--M_*1 #button/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      show: !0
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/#comment0
REMOVE #text after div/#comment0
```