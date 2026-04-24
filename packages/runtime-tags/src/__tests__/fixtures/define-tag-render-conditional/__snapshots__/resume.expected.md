# Render
```html
<!--M_[-->
<div>
  Hello 
  <!---->
  1
  <!--M_*3 #text/0-->
</div>
<!--M_]1 #text/0 2-->
<button>
  1
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      x: 1
    },
    {
      _: _.a,
      "#childScope/0": _.b = {}
    }, _.b]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  Hello 2
</div>
<!---->
<!--M_]1 #text/0 2-->
<button>
  2
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      x: 1
    },
    {
      _: _.a,
      "#childScope/0": _.b = {}
    }, _.b]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #comment0, div, #comment1
REMOVE #comment after #comment1
REMOVE div after #comment1
REMOVE #text after #comment1
UPDATE button/#text "1" => "2"
UPDATE div/#text1 "" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  Hello 3
</div>
<!---->
<!--M_]1 #text/0 2-->
<button>
  3
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      x: 1
    },
    {
      _: _.a,
      "#childScope/0": _.b = {}
    }, _.b]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE div/#text1 "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  Hello 4
</div>
<!---->
<!--M_]1 #text/0 2-->
<button>
  4
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      x: 1
    },
    {
      _: _.a,
      "#childScope/0": _.b = {}
    }, _.b]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "3" => "4"
UPDATE div/#text1 "3" => "4"
```