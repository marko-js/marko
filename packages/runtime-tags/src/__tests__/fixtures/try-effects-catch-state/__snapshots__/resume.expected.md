# Render
```html
<div>
  0
</div>
<!--M_*1 #div/0-->
<!--M_[-->
<button>
  inc
</button>
<!--M_*2 #button/0-->
--
<!---->
<!--M_*2 #text/1-->
<!--M_]1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      clickCount: 0,
      "ClosureScopes:clickCount": _.d = new Set
    }, _.b = {
      _: _.a,
      "#BranchAccessor": "#text/1"
    }], _.b["#CatchContent"] = _._[
      "__tests__/template.marko_2_content"
      ](_.a), (_.d).add(_.b), _.c),
    "__tests__/template.marko_1_clickCount 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text1
INSERT #text2
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  1
</div>
<!--M_*1 #div/0-->
<!--M_[-->
<button>
  inc
</button>
<!--M_*2 #button/0-->
--
<!---->
<!--M_*2 #text/1-->
<!--M_]1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      clickCount: 0,
      "ClosureScopes:clickCount": _.d = new Set
    }, _.b = {
      _: _.a,
      "#BranchAccessor": "#text/1"
    }], _.b["#CatchContent"] = _._[
      "__tests__/template.marko_2_content"
      ](_.a), (_.d).add(_.b), _.c),
    "__tests__/template.marko_1_clickCount 2"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #text in div
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  1
</div>
<!--M_*1 #div/0-->
Error: ERROR!
<!--M_]1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      clickCount: 0,
      "ClosureScopes:clickCount": _.d = new Set
    }, _.b = {
      _: _.a,
      "#BranchAccessor": "#text/1"
    }], _.b["#CatchContent"] = _._[
      "__tests__/template.marko_2_content"
      ](_.a), (_.d).add(_.b), _.c),
    "__tests__/template.marko_1_clickCount 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text
REMOVE #comment after #text
REMOVE button after #text
REMOVE #comment after #text
REMOVE #text after #text
REMOVE #comment after #text
REMOVE #text after #text
REMOVE #comment after #text
REMOVE #text after #text
UPDATE #text " " => "Error: ERROR!"
```