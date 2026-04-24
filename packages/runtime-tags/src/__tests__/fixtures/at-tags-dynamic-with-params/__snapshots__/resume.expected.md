# Render
```html
<!--M_[-->
y:
<!---->
1
<!--M_*3 #text/0-->
<!--M_]2 #text/0 3-->
<button>
  Toggle
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      x: !0,
      "#childScope/0": _.a = {
        "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
      }
    }, _.a]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text2
```

# Render
```js
container.querySelector("button").click();
```
```html
<!--M_]2 #text/0 3-->
<button>
  Toggle
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      x: !0,
      "#childScope/0": _.a = {
        "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
      }
    }, _.a]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment0 after #text
INSERT #comment0
REMOVE #comment after #comment0
REMOVE #text after #comment0
REMOVE #comment after #comment0
REMOVE #text after #comment0
REMOVE #comment after #comment0
REMOVE #text after #comment0
```

# Render
```js
container.querySelector("button").click();
```
```html
y: 1
<button>
  Toggle
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      x: !0,
      "#childScope/0": _.a = {
        "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
      }
    }, _.a]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text0, #text1
REMOVE #comment after #text1
UPDATE #text1 "" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!--M_]2 #text/0 3-->
<button>
  Toggle
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      x: !0,
      "#childScope/0": _.a = {
        "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
      }
    }, _.a]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #comment0
REMOVE #text after #comment0
REMOVE #text after #comment0
```