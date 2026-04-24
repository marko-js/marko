# Render
```html
<button>
  Inc
</button>
<!--M_*1 #button/0-->
<div>
  <!--M_[-->
  <div>
    <div>
      1
      <!--M_*5 #text/0-->
      .2
    </div>
  </div>
  <!--M_]2 #text/0 3-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.d = [0, _.b = {
      x: 1,
      y: 2,
      "#childScope/1": _.a = {
        "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
      }
    }, _.a, _.c = {
      outer: 1,
      _: _.b,
      "ClosureScopes:outer": _.e = new Set
    }, 1, _.f = {
      _: _.c,
      "#ClosestBranchId": 3
    }], _.a.content = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.e).add(_.f), _.d),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<!--M_*1 #button/0-->
<div>
  <!--M_[-->
  <div>
    <div>
      2
      <!--M_*5 #text/0-->
      .2
    </div>
  </div>
  <!--M_]2 #text/0 3-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.d = [0, _.b = {
      x: 1,
      y: 2,
      "#childScope/1": _.a = {
        "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
      }
    }, _.a, _.c = {
      outer: 1,
      _: _.b,
      "ClosureScopes:outer": _.e = new Set
    }, 1, _.f = {
      _: _.c,
      "#ClosestBranchId": 3
    }], _.a.content = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.e).add(_.f), _.d),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/div/div/#text0 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<!--M_*1 #button/0-->
<div>
  <!--M_[-->
  <div>
    <div>
      3
      <!--M_*5 #text/0-->
      .2
    </div>
  </div>
  <!--M_]2 #text/0 3-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.d = [0, _.b = {
      x: 1,
      y: 2,
      "#childScope/1": _.a = {
        "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
      }
    }, _.a, _.c = {
      outer: 1,
      _: _.b,
      "ClosureScopes:outer": _.e = new Set
    }, 1, _.f = {
      _: _.c,
      "#ClosestBranchId": 3
    }], _.a.content = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.e).add(_.f), _.d),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/div/div/#text0 "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<!--M_*1 #button/0-->
<div>
  <!--M_[-->
  <div>
    <div>
      4
      <!--M_*5 #text/0-->
      .2
    </div>
  </div>
  <!--M_]2 #text/0 3-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.d = [0, _.b = {
      x: 1,
      y: 2,
      "#childScope/1": _.a = {
        "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
      }
    }, _.a, _.c = {
      outer: 1,
      _: _.b,
      "ClosureScopes:outer": _.e = new Set
    }, 1, _.f = {
      _: _.c,
      "#ClosestBranchId": 3
    }], _.a.content = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.e).add(_.f), _.d),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/div/div/#text0 "3" => "4"
```