# Render
```html
<!--M_[-->
<div>
  a
</div>
<!--M_|2 #text/0-->
<!--M_]1 #text/0 2-->
<button>
  More
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      itemId: 0,
      items: [0],
      items_length: 1
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_0_itemId_items 1"
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
<!--M_[-->
<div>
  a
</div>
<div>
  b
</div>
<div>
  a
</div>
<div>
  b
</div>
<!---->
<!--M_]1 #text/0 2-->
<button>
  More
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      itemId: 0,
      items: [0],
      items_length: 1
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_0_itemId_items 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div2, #text, #comment1
INSERT div1
REMOVE #comment after div1
INSERT div3
REMOVE #text after div3
```

# Render
```js
container.querySelector("button").click();
```
```html
<!--M_[-->
<div>
  a
</div>
<div>
  b
</div>
<div>
  a
</div>
<div>
  b
</div>
<!---->
<div>
  a
</div>
<div>
  b
</div>
<!---->
<!--M_]1 #text/0 2-->
<button>
  More
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      itemId: 0,
      items: [0],
      items_length: 1
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_0_itemId_items 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div4, #text, #comment2
INSERT div5
REMOVE #text after div5
```