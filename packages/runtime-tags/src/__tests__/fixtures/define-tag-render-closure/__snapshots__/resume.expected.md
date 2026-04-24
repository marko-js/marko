# Render
```html
<div>
  1
  <!--M_*2 #text/0-->
</div>
<!--M_[-->
<div>
  1
  <!--M_*4 #text/0-->
</div>
<!--M_]1 #text/1 3-->
<button>
  1
  <!--M_*1 #text/3-->
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      x: 1,
      "ClosureScopes:x": _.c = new Set
    }, _.d = {
      _: _.a
    }, 1, _.e = {
      _: _.a,
      "#ClosestBranchId": 3
    }], (_.c).add(_.d), _.c.add(_.e), _.b),
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
<div>
  2
  <!--M_*2 #text/0-->
</div>
<!---->
<div>
  2
</div>
<!---->
<!--M_]1 #text/1 3-->
<button>
  2
  <!--M_*1 #text/3-->
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      x: 1,
      "ClosureScopes:x": _.c = new Set
    }, _.d = {
      _: _.a
    }, 1, _.e = {
      _: _.a,
      "#ClosestBranchId": 3
    }], (_.c).add(_.d), _.c.add(_.e), _.b),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "1" => "2"
INSERT #comment0, div1, #comment1
REMOVE #comment after #comment1
REMOVE div after #comment1
REMOVE #text after #comment1
UPDATE div0/#text "1" => "2"
UPDATE div1/#text " " => "2"
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
<!---->
<div>
  3
</div>
<!---->
<!--M_]1 #text/1 3-->
<button>
  3
  <!--M_*1 #text/3-->
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      x: 1,
      "ClosureScopes:x": _.c = new Set
    }, _.d = {
      _: _.a
    }, 1, _.e = {
      _: _.a,
      "#ClosestBranchId": 3
    }], (_.c).add(_.d), _.c.add(_.e), _.b),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE div0/#text "2" => "3"
UPDATE div1/#text "2" => "3"
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
<!---->
<div>
  4
</div>
<!---->
<!--M_]1 #text/1 3-->
<button>
  4
  <!--M_*1 #text/3-->
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      x: 1,
      "ClosureScopes:x": _.c = new Set
    }, _.d = {
      _: _.a
    }, 1, _.e = {
      _: _.a,
      "#ClosestBranchId": 3
    }], (_.c).add(_.d), _.c.add(_.e), _.b),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "3" => "4"
UPDATE div0/#text "3" => "4"
UPDATE div1/#text "3" => "4"
```