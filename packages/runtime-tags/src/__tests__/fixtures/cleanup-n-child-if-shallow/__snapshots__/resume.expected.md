# Render
```html
<button>
  Toggle
</button>
<!--M_*1 #button/0-->
<div>
  mounted
</div>
<!--M_*1 #div/1-->
<!--M_[-->
<div>
  a
</div>
<span>
  b
</span>
<p>
  c
</p>
<!--M_]1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      show: !0
    }, _.d = {
      _: _.a
    },
    {
      input: _.b = {},
      "#ClosestBranchId": 2
    }], _.b.write = _._[
      "__tests__/template.marko_1/write"
      ](_.d), _.c),
    "__tests__/tags/child.marko_0_input 3 __tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text
INSERT div0/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<!--M_*1 #button/0-->
<div>
  destroyed
</div>
<!--M_*1 #div/1-->
<!--M_]1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      show: !0
    }, _.d = {
      _: _.a
    },
    {
      input: _.b = {},
      "#ClosestBranchId": 2
    }], _.b.write = _._[
      "__tests__/template.marko_1/write"
      ](_.d), _.c),
    "__tests__/tags/child.marko_0_input 3 __tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment2 after #text
INSERT #comment2
REMOVE #comment after #comment2
REMOVE div after #comment2
REMOVE span after #comment2
REMOVE p after #comment2
REMOVE #text after #comment2
REMOVE #text in div
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<!--M_*1 #button/0-->
<div>
  mounted
</div>
<!--M_*1 #div/1-->
<div>
  a
</div>
<span>
  b
</span>
<p>
  c
</p>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      show: !0
    }, _.d = {
      _: _.a
    },
    {
      input: _.b = {},
      "#ClosestBranchId": 2
    }], _.b.write = _._[
      "__tests__/template.marko_1/write"
      ](_.d), _.c),
    "__tests__/tags/child.marko_0_input 3 __tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div1, span, p
REMOVE #comment after p
REMOVE #text in div0
INSERT div0/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<!--M_*1 #button/0-->
<div>
  destroyed
</div>
<!--M_*1 #div/1-->
<!--M_]1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      show: !0
    }, _.d = {
      _: _.a
    },
    {
      input: _.b = {},
      "#ClosestBranchId": 2
    }], _.b.write = _._[
      "__tests__/template.marko_1/write"
      ](_.d), _.c),
    "__tests__/tags/child.marko_0_input 3 __tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #comment2
REMOVE div after #comment2
REMOVE span after #comment2
REMOVE p after #comment2
REMOVE #text in div
INSERT div/#text
```