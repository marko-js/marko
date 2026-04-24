# Render
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<!--M_*1 #button/0-->
<button
  id="middle"
>
  Toggle Middle
</button>
<!--M_*1 #button/1-->
<button
  id="inner"
>
  Toggle Inner
</button>
<!--M_*1 #button/2-->
<pre>
  
Outer mounted
Middle mounted
Inner mounted
</pre>
<!--M_*1 #pre/3-->
<div>
  <p>
    Outer
  </p>
  <div>
    <p>
      Middle
    </p>
    <p>
      Inner
    </p>
    <!--M_|4 #text/1 6-->
  </div>
  <!--M_|2 #text/1 4-->
</div>
<!--M_|1 #text/4 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.g = [0, _.a = {
      showOuter: !0,
      showMiddle: !0,
      showInner: !0,
      "ClosureScopes:showInner": _.h = new Set
    }, _.c = {
      _: _.a
    }, _.b = {
      name: "Outer",
      "#ClosestBranchId": 2
    }, _.e = {
      _: _.c
    }, _.d = {
      name: "Middle",
      "#ClosestBranchId": 4
    },
    {
      _: _.e
    }, _.f = {
      name: "Inner",
      "#ClosestBranchId": 6
    }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
      "__tests__/template.marko_0/write"
      ](_.a), (_.h).add(_.e), _.g),
    "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text
REMOVE #text in pre
INSERT #text
REMOVE #text in pre
INSERT pre/#text
```

# Render
```js
container.querySelector("button#inner").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<!--M_*1 #button/0-->
<button
  id="middle"
>
  Toggle Middle
</button>
<!--M_*1 #button/1-->
<button
  id="inner"
>
  Toggle Inner
</button>
<!--M_*1 #button/2-->
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
</pre>
<!--M_*1 #pre/3-->
<div>
  <p>
    Outer
  </p>
  <div>
    <p>
      Middle
    </p>
    <!--M_|4 #text/1 6-->
  </div>
  <!--M_|2 #text/1 4-->
</div>
<!--M_|1 #text/4 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.g = [0, _.a = {
      showOuter: !0,
      showMiddle: !0,
      showInner: !0,
      "ClosureScopes:showInner": _.h = new Set
    }, _.c = {
      _: _.a
    }, _.b = {
      name: "Outer",
      "#ClosestBranchId": 2
    }, _.e = {
      _: _.c
    }, _.d = {
      name: "Middle",
      "#ClosestBranchId": 4
    },
    {
      _: _.e
    }, _.f = {
      name: "Inner",
      "#ClosestBranchId": 6
    }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
      "__tests__/template.marko_0/write"
      ](_.a), (_.h).add(_.e), _.g),
    "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE div/div/#comment after p
INSERT div/div/#comment
REMOVE p after div/div/#comment
REMOVE #text in pre
INSERT pre/#text
```

# Render
```js
container.querySelector("button#middle").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<!--M_*1 #button/0-->
<button
  id="middle"
>
  Toggle Middle
</button>
<!--M_*1 #button/1-->
<button
  id="inner"
>
  Toggle Inner
</button>
<!--M_*1 #button/2-->
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
</pre>
<!--M_*1 #pre/3-->
<div>
  <p>
    Outer
  </p>
  <!--M_|2 #text/1 4-->
</div>
<!--M_|1 #text/4 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.g = [0, _.a = {
      showOuter: !0,
      showMiddle: !0,
      showInner: !0,
      "ClosureScopes:showInner": _.h = new Set
    }, _.c = {
      _: _.a
    }, _.b = {
      name: "Outer",
      "#ClosestBranchId": 2
    }, _.e = {
      _: _.c
    }, _.d = {
      name: "Middle",
      "#ClosestBranchId": 4
    },
    {
      _: _.e
    }, _.f = {
      name: "Inner",
      "#ClosestBranchId": 6
    }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
      "__tests__/template.marko_0/write"
      ](_.a), (_.h).add(_.e), _.g),
    "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE div/#comment after div
INSERT div/#comment
REMOVE div after div/#comment
REMOVE #text in pre
INSERT pre/#text
```

# Render
```js
container.querySelector("button#outer").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<!--M_*1 #button/0-->
<button
  id="middle"
>
  Toggle Middle
</button>
<!--M_*1 #button/1-->
<button
  id="inner"
>
  Toggle Inner
</button>
<!--M_*1 #button/2-->
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
<!--M_*1 #pre/3-->
<!--M_|1 #text/4 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.g = [0, _.a = {
      showOuter: !0,
      showMiddle: !0,
      showInner: !0,
      "ClosureScopes:showInner": _.h = new Set
    }, _.c = {
      _: _.a
    }, _.b = {
      name: "Outer",
      "#ClosestBranchId": 2
    }, _.e = {
      _: _.c
    }, _.d = {
      name: "Middle",
      "#ClosestBranchId": 4
    },
    {
      _: _.e
    }, _.f = {
      name: "Inner",
      "#ClosestBranchId": 6
    }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
      "__tests__/template.marko_0/write"
      ](_.a), (_.h).add(_.e), _.g),
    "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment4 after div
INSERT #comment4
REMOVE div after #comment4
REMOVE #text in pre
INSERT pre/#text
```

# Render
```js
container.querySelector("button#inner").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<!--M_*1 #button/0-->
<button
  id="middle"
>
  Toggle Middle
</button>
<!--M_*1 #button/1-->
<button
  id="inner"
>
  Toggle Inner
</button>
<!--M_*1 #button/2-->
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
<!--M_*1 #pre/3-->
<!--M_|1 #text/4 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.g = [0, _.a = {
      showOuter: !0,
      showMiddle: !0,
      showInner: !0,
      "ClosureScopes:showInner": _.h = new Set
    }, _.c = {
      _: _.a
    }, _.b = {
      name: "Outer",
      "#ClosestBranchId": 2
    }, _.e = {
      _: _.c
    }, _.d = {
      name: "Middle",
      "#ClosestBranchId": 4
    },
    {
      _: _.e
    }, _.f = {
      name: "Inner",
      "#ClosestBranchId": 6
    }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
      "__tests__/template.marko_0/write"
      ](_.a), (_.h).add(_.e), _.g),
    "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button#middle").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<!--M_*1 #button/0-->
<button
  id="middle"
>
  Toggle Middle
</button>
<!--M_*1 #button/1-->
<button
  id="inner"
>
  Toggle Inner
</button>
<!--M_*1 #button/2-->
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
<!--M_*1 #pre/3-->
<!--M_|1 #text/4 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.g = [0, _.a = {
      showOuter: !0,
      showMiddle: !0,
      showInner: !0,
      "ClosureScopes:showInner": _.h = new Set
    }, _.c = {
      _: _.a
    }, _.b = {
      name: "Outer",
      "#ClosestBranchId": 2
    }, _.e = {
      _: _.c
    }, _.d = {
      name: "Middle",
      "#ClosestBranchId": 4
    },
    {
      _: _.e
    }, _.f = {
      name: "Inner",
      "#ClosestBranchId": 6
    }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
      "__tests__/template.marko_0/write"
      ](_.a), (_.h).add(_.e), _.g),
    "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button#outer").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<!--M_*1 #button/0-->
<button
  id="middle"
>
  Toggle Middle
</button>
<!--M_*1 #button/1-->
<button
  id="inner"
>
  Toggle Inner
</button>
<!--M_*1 #button/2-->
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
Outer mounted
Middle mounted
Inner mounted
</pre>
<!--M_*1 #pre/3-->
<div>
  <p>
    Outer
  </p>
  <div>
    <p>
      Middle
    </p>
    <p>
      Inner
    </p>
  </div>
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.g = [0, _.a = {
      showOuter: !0,
      showMiddle: !0,
      showInner: !0,
      "ClosureScopes:showInner": _.h = new Set
    }, _.c = {
      _: _.a
    }, _.b = {
      name: "Outer",
      "#ClosestBranchId": 2
    }, _.e = {
      _: _.c
    }, _.d = {
      name: "Middle",
      "#ClosestBranchId": 4
    },
    {
      _: _.e
    }, _.f = {
      name: "Inner",
      "#ClosestBranchId": 6
    }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
      "__tests__/template.marko_0/write"
      ](_.a), (_.h).add(_.e), _.g),
    "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div
REMOVE #comment after div
INSERT div/div
REMOVE #text after div/div
UPDATE div/p/#text " " => "Outer"
INSERT div/div/p1
REMOVE #text after div/div/p1
UPDATE div/div/p0/#text " " => "Middle"
UPDATE div/div/p1/#text " " => "Inner"
REMOVE #text in pre
INSERT #text
REMOVE #text in pre
INSERT #text
REMOVE #text in pre
INSERT pre/#text
```

# Render
```js
container.querySelector("button#outer").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<!--M_*1 #button/0-->
<button
  id="middle"
>
  Toggle Middle
</button>
<!--M_*1 #button/1-->
<button
  id="inner"
>
  Toggle Inner
</button>
<!--M_*1 #button/2-->
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
<!--M_*1 #pre/3-->
<!--M_|1 #text/4 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.g = [0, _.a = {
      showOuter: !0,
      showMiddle: !0,
      showInner: !0,
      "ClosureScopes:showInner": _.h = new Set
    }, _.c = {
      _: _.a
    }, _.b = {
      name: "Outer",
      "#ClosestBranchId": 2
    }, _.e = {
      _: _.c
    }, _.d = {
      name: "Middle",
      "#ClosestBranchId": 4
    },
    {
      _: _.e
    }, _.f = {
      name: "Inner",
      "#ClosestBranchId": 6
    }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
      "__tests__/template.marko_0/write"
      ](_.a), (_.h).add(_.e), _.g),
    "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #comment4
REMOVE div after #comment4
REMOVE #text in pre
INSERT #text
REMOVE #text in pre
INSERT #text
REMOVE #text in pre
INSERT pre/#text
```