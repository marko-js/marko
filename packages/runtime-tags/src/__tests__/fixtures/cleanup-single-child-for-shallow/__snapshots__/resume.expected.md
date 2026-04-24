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
<div>
  1
  <!--M_*3 #text/0-->
</div>
<div>
  2
  <!--M_*5 #text/0-->
</div>
<div>
  3
  <!--M_*7 #text/0-->
</div>
<!--M_|1 #text/2 6 4 2-->
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
<div>
  1
  <!--M_*3 #text/0-->
</div>
<div>
  2
  <!--M_*5 #text/0-->
</div>
<!--M_|1 #text/2 6 4 2-->
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
REMOVE div after div2
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
<div>
  1
  <!--M_*3 #text/0-->
</div>
<!--M_|1 #text/2 6 4 2-->
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
REMOVE div after div1
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
<!--M_|1 #text/2 6 4 2-->
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
REMOVE #comment2 after div
INSERT #comment2
REMOVE div after #comment1
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
<div>
  2
</div>
<div>
  3
</div>
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
INSERT div1
INSERT div2
INSERT div3
REMOVE #text in div0
INSERT #text
REMOVE #text in div0
INSERT #text
REMOVE #text in div0
INSERT div0/#text
```