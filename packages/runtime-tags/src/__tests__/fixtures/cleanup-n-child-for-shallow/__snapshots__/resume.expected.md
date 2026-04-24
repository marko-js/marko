# Render
```html
<button>
  Toggle
</button>
<!--M_*1 #button/0-->
<div>
  
mounted 1
mounted 2
mounted 3
</div>
<!--M_*1 #div/1-->
<!--M_[-->
<div>
  1
  <!--M_*3 #text/0-->
</div>
<span>
  1
  <!--M_*3 #text/1-->
</span>
<p>
  1
  <!--M_*3 #text/2-->
</p>
<!--M_[2-->
<div>
  2
  <!--M_*5 #text/0-->
</div>
<span>
  2
  <!--M_*5 #text/1-->
</span>
<p>
  2
  <!--M_*5 #text/2-->
</p>
<!--M_[4-->
<div>
  3
  <!--M_*7 #text/0-->
</div>
<span>
  3
  <!--M_*7 #text/1-->
</span>
<p>
  3
  <!--M_*7 #text/2-->
</p>
<!--M_]1 #text/2 6-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.e = [0, _.a = {
      items: [1, 2, 3]
    },
    {
      "#childScope/0": _.b = {
        name: 1,
        "#ClosestBranchId": 2
      }
    }, _.b,
    {
      "#childScope/0": _.c = {
        name: 2,
        "#ClosestBranchId": 4
      }
    }, _.c,
    {
      "#childScope/0": _.d = {
        name: 3,
        "#ClosestBranchId": 6
      }
    }, _.d], _.a.write = _.b.write = _.c.write = _.d.write = _._[
      "__tests__/template.marko_0/write"
      ](_.a), _.e),
    "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_items 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text0
INSERT #text1
INSERT #text2
INSERT #text
REMOVE #text in div0
INSERT #text
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
  
mounted 1
mounted 2
mounted 3
destroyed 3
</div>
<!--M_*1 #div/1-->
<!--M_[-->
<div>
  1
  <!--M_*3 #text/0-->
</div>
<span>
  1
  <!--M_*3 #text/1-->
</span>
<p>
  1
  <!--M_*3 #text/2-->
</p>
<!--M_[2-->
<div>
  2
  <!--M_*5 #text/0-->
</div>
<span>
  2
  <!--M_*5 #text/1-->
</span>
<p>
  2
  <!--M_*5 #text/2-->
</p>
<!--M_]1 #text/2 6-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.e = [0, _.a = {
      items: [1, 2, 3]
    },
    {
      "#childScope/0": _.b = {
        name: 1,
        "#ClosestBranchId": 2
      }
    }, _.b,
    {
      "#childScope/0": _.c = {
        name: 2,
        "#ClosestBranchId": 4
      }
    }, _.c,
    {
      "#childScope/0": _.d = {
        name: 3,
        "#ClosestBranchId": 6
      }
    }, _.d], _.a.write = _.b.write = _.c.write = _.d.write = _._[
      "__tests__/template.marko_0/write"
      ](_.a), _.e),
    "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_items 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment after #text1
REMOVE div after #text1
REMOVE span after #text1
REMOVE p after #text1
REMOVE #text after #text1
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
  
mounted 1
mounted 2
mounted 3
destroyed 3
destroyed 2
</div>
<!--M_*1 #div/1-->
<!--M_[-->
<div>
  1
  <!--M_*3 #text/0-->
</div>
<span>
  1
  <!--M_*3 #text/1-->
</span>
<p>
  1
  <!--M_*3 #text/2-->
</p>
<!--M_]1 #text/2 6-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.e = [0, _.a = {
      items: [1, 2, 3]
    },
    {
      "#childScope/0": _.b = {
        name: 1,
        "#ClosestBranchId": 2
      }
    }, _.b,
    {
      "#childScope/0": _.c = {
        name: 2,
        "#ClosestBranchId": 4
      }
    }, _.c,
    {
      "#childScope/0": _.d = {
        name: 3,
        "#ClosestBranchId": 6
      }
    }, _.d], _.a.write = _.b.write = _.c.write = _.d.write = _._[
      "__tests__/template.marko_0/write"
      ](_.a), _.e),
    "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_items 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment after #text
REMOVE div after #text
REMOVE span after #text
REMOVE p after #text
REMOVE #text after #text
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
  
mounted 1
mounted 2
mounted 3
destroyed 3
destroyed 2
destroyed 1
</div>
<!--M_*1 #div/1-->
<!--M_]1 #text/2 6-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.e = [0, _.a = {
      items: [1, 2, 3]
    },
    {
      "#childScope/0": _.b = {
        name: 1,
        "#ClosestBranchId": 2
      }
    }, _.b,
    {
      "#childScope/0": _.c = {
        name: 2,
        "#ClosestBranchId": 4
      }
    }, _.c,
    {
      "#childScope/0": _.d = {
        name: 3,
        "#ClosestBranchId": 6
      }
    }, _.d], _.a.write = _.b.write = _.c.write = _.d.write = _._[
      "__tests__/template.marko_0/write"
      ](_.a), _.e),
    "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_items 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment2 after #text
INSERT #comment2
REMOVE #comment after #comment1
REMOVE div after #comment1
REMOVE span after #comment1
REMOVE p after #comment1
REMOVE #text after #comment1
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
  
mounted 1
mounted 2
mounted 3
destroyed 3
destroyed 2
destroyed 1
mounted 1
mounted 2
mounted 3
</div>
<!--M_*1 #div/1-->
<div>
  1
</div>
<span>
  1
</span>
<p>
  1
</p>
<div>
  2
</div>
<span>
  2
</span>
<p>
  2
</p>
<div>
  3
</div>
<span>
  3
</span>
<p>
  3
</p>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.e = [0, _.a = {
      items: [1, 2, 3]
    },
    {
      "#childScope/0": _.b = {
        name: 1,
        "#ClosestBranchId": 2
      }
    }, _.b,
    {
      "#childScope/0": _.c = {
        name: 2,
        "#ClosestBranchId": 4
      }
    }, _.c,
    {
      "#childScope/0": _.d = {
        name: 3,
        "#ClosestBranchId": 6
      }
    }, _.d], _.a.write = _.b.write = _.c.write = _.d.write = _._[
      "__tests__/template.marko_0/write"
      ](_.a), _.e),
    "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_items 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment after #comment1
INSERT div1, span0, p0
INSERT div2, span1, p1
INSERT div3, span2, p2
REMOVE #text in div0
INSERT #text
REMOVE #text in div0
INSERT #text
REMOVE #text in div0
INSERT div0/#text
```