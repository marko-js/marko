# Render
```html
<button
  class="toggle"
>
  Toggle
</button>
<!--M_*1 #button/0-->
<button
  class="inc"
>
  Inc
</button>
<!--M_*1 #button/1-->
<!--M_[-->
<div>
  x
  <!--M_*2 #text/0-->
  : 
  <!---->
  1
  <!--M_*2 #text/1-->
</div>
<!--M_]1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/2": "__tests__/child.marko",
      show: !0,
      value: 1
    }]),
    "__tests__/template.marko_0_value 1 __tests__/template.marko_0_show 1"
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
container.querySelector(".inc").click();
```
```html
<button
  class="toggle"
>
  Toggle
</button>
<!--M_*1 #button/0-->
<button
  class="inc"
>
  Inc
</button>
<!--M_*1 #button/1-->
<!--M_[-->
<div>
  x
  <!--M_*2 #text/0-->
  : 
  <!---->
  1
  <!--M_*2 #text/1-->
</div>
<!--M_]1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/2": "__tests__/child.marko",
      show: !0,
      value: 1
    }]),
    "__tests__/template.marko_0_value 1 __tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  Toggle
</button>
<!--M_*1 #button/0-->
<button
  class="inc"
>
  Inc
</button>
<!--M_*1 #button/1-->
<!--M_]1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/2": "__tests__/child.marko",
      show: !0,
      value: 1
    }]),
    "__tests__/template.marko_0_value 1 __tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment2 after #text
INSERT #comment2
REMOVE #comment after #comment2
REMOVE div after #comment2
REMOVE #text after #comment2
```

# Render
```js
container.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  Toggle
</button>
<!--M_*1 #button/0-->
<button
  class="inc"
>
  Inc
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/2": "__tests__/child.marko",
      show: !0,
      value: 1
    }]),
    "__tests__/template.marko_0_value 1 __tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text
REMOVE #comment after #text
```

# Render ASYNC
```html
<button
  class="toggle"
>
  Toggle
</button>
<!--M_*1 #button/0-->
<button
  class="inc"
>
  Inc
</button>
<!--M_*1 #button/1-->
<div>
  x: 2
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/2": "__tests__/child.marko",
      show: !0,
      value: 1
    }]),
    "__tests__/template.marko_0_value 1 __tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div
REMOVE #text after div
UPDATE div/#text0 "" => "x"
UPDATE div/#text2 "" => "2"
```