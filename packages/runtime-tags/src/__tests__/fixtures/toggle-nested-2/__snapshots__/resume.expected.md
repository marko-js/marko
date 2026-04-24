# Render
```html
<div>
  <button
    id="outer"
  />
  <!--M_*1 #button/0-->
  <!--M_[-->
  <button
    id="inner"
  />
  <!--M_*2 #button/0-->
  <button
    id="count"
  >
    0
    <!--M_*3 #text/1-->
  </button>
  <!--M_*3 #button/0-->
  <!--M_|2 #text/1 3-->
  <!--M_]1 #text/1 2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      outer: !0,
      inner: !0,
      count: 0,
      "ClosureScopes:count": _.d = new Set
    }, _.b = {
      _: _.a
    }, _.e = {
      _: _.b
    }], (_.d).add(_.e), _.c),
    "__tests__/template.marko_2_count 3 __tests__/template.marko_1_inner 2 __tests__/template.marko_0_outer 1"
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
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="outer"
  />
  <!--M_*1 #button/0-->
  <!--M_[-->
  <button
    id="inner"
  />
  <!--M_*2 #button/0-->
  <button
    id="count"
  >
    1
    <!--M_*3 #text/1-->
  </button>
  <!--M_*3 #button/0-->
  <!--M_|2 #text/1 3-->
  <!--M_]1 #text/1 2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      outer: !0,
      inner: !0,
      count: 0,
      "ClosureScopes:count": _.d = new Set
    }, _.b = {
      _: _.a
    }, _.e = {
      _: _.b
    }], (_.d).add(_.e), _.c),
    "__tests__/template.marko_2_count 3 __tests__/template.marko_1_inner 2 __tests__/template.marko_0_outer 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/button2/#text "0" => "1"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="outer"
  />
  <!--M_*1 #button/0-->
  <!--M_[-->
  <button
    id="inner"
  />
  <!--M_*2 #button/0-->
  <button
    id="count"
  >
    2
    <!--M_*3 #text/1-->
  </button>
  <!--M_*3 #button/0-->
  <!--M_|2 #text/1 3-->
  <!--M_]1 #text/1 2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      outer: !0,
      inner: !0,
      count: 0,
      "ClosureScopes:count": _.d = new Set
    }, _.b = {
      _: _.a
    }, _.e = {
      _: _.b
    }], (_.d).add(_.e), _.c),
    "__tests__/template.marko_2_count 3 __tests__/template.marko_1_inner 2 __tests__/template.marko_0_outer 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/button2/#text "1" => "2"
```

# Render
```js
container.querySelector("#inner").click();
```
```html
<div>
  <button
    id="outer"
  />
  <!--M_*1 #button/0-->
  <!--M_[-->
  <button
    id="inner"
  />
  <!--M_*2 #button/0-->
  <!--M_|2 #text/1 3-->
  <!--M_*3 #button/0-->
  <!--M_]1 #text/1 2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      outer: !0,
      inner: !0,
      count: 0,
      "ClosureScopes:count": _.d = new Set
    }, _.b = {
      _: _.a
    }, _.e = {
      _: _.b
    }], (_.d).add(_.e), _.c),
    "__tests__/template.marko_2_count 3 __tests__/template.marko_1_inner 2 __tests__/template.marko_0_outer 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE div/#comment3 after div/#comment4
INSERT div/#comment3
REMOVE button after div/#comment3
```

# Render
```js
container.querySelector("#inner").click();
```
```html
<div>
  <button
    id="outer"
  />
  <!--M_*1 #button/0-->
  <!--M_[-->
  <button
    id="inner"
  />
  <!--M_*2 #button/0-->
  <button
    id="count"
  >
    2
  </button>
  <!--M_*3 #button/0-->
  <!--M_]1 #text/1 2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      outer: !0,
      inner: !0,
      count: 0,
      "ClosureScopes:count": _.d = new Set
    }, _.b = {
      _: _.a
    }, _.e = {
      _: _.b
    }], (_.d).add(_.e), _.c),
    "__tests__/template.marko_2_count 3 __tests__/template.marko_1_inner 2 __tests__/template.marko_0_outer 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/button2
REMOVE #comment after div/button2
UPDATE div/button2/#text " " => "2"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="outer"
  />
  <!--M_*1 #button/0-->
  <!--M_[-->
  <button
    id="inner"
  />
  <!--M_*2 #button/0-->
  <button
    id="count"
  >
    3
  </button>
  <!--M_*3 #button/0-->
  <!--M_]1 #text/1 2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      outer: !0,
      inner: !0,
      count: 0,
      "ClosureScopes:count": _.d = new Set
    }, _.b = {
      _: _.a
    }, _.e = {
      _: _.b
    }], (_.d).add(_.e), _.c),
    "__tests__/template.marko_2_count 3 __tests__/template.marko_1_inner 2 __tests__/template.marko_0_outer 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/button2/#text "2" => "3"
```

# Render
```js
container.querySelector("#outer").click();
```
```html
<div>
  <button
    id="outer"
  />
  <!--M_*1 #button/0-->
  <!--M_]1 #text/1 2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      outer: !0,
      inner: !0,
      count: 0,
      "ClosureScopes:count": _.d = new Set
    }, _.b = {
      _: _.a
    }, _.e = {
      _: _.b
    }], (_.d).add(_.e), _.c),
    "__tests__/template.marko_2_count 3 __tests__/template.marko_1_inner 2 __tests__/template.marko_0_outer 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE div/#comment1 after #text
INSERT div/#comment1
REMOVE #comment after div/#comment1
REMOVE button after div/#comment1
REMOVE #comment after div/#comment1
REMOVE button after div/#comment1
REMOVE #comment after div/#comment1
REMOVE #text after div/#comment1
```

# Render
```js
container.querySelector("#outer").click();
```
```html
<div>
  <button
    id="outer"
  />
  <!--M_*1 #button/0-->
  <button
    id="inner"
  />
  <button
    id="count"
  >
    3
  </button>
  <!---->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      outer: !0,
      inner: !0,
      count: 0,
      "ClosureScopes:count": _.d = new Set
    }, _.b = {
      _: _.a
    }, _.e = {
      _: _.b
    }], (_.d).add(_.e), _.c),
    "__tests__/template.marko_2_count 3 __tests__/template.marko_1_inner 2 __tests__/template.marko_0_outer 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/button1, #text, div/#comment1
REMOVE #comment after div/#comment1
INSERT div/button2
REMOVE #text after div/button2
UPDATE div/button2/#text " " => "3"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="outer"
  />
  <!--M_*1 #button/0-->
  <button
    id="inner"
  />
  <button
    id="count"
  >
    4
  </button>
  <!---->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      outer: !0,
      inner: !0,
      count: 0,
      "ClosureScopes:count": _.d = new Set
    }, _.b = {
      _: _.a
    }, _.e = {
      _: _.b
    }], (_.d).add(_.e), _.c),
    "__tests__/template.marko_2_count 3 __tests__/template.marko_1_inner 2 __tests__/template.marko_0_outer 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/button2/#text "3" => "4"
```