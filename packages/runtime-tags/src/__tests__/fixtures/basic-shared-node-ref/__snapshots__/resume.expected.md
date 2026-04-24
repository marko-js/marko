# Render
```html
<ul>
  <li>
    1
    <!--M_*2 #text/0-->
  </li>
  <li>
    2
    <!--M_*3 #text/0-->
  </li>
  <li>
    3
    <!--M_*4 #text/0-->
  </li>
  <!--M_}1 #ul/0 4 3 2-->
</ul>
<button
  id="toggle"
>
  Toggle
</button>
<!--M_*1 #button/1-->
<button
  id="reverse"
>
  Reverse
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      open: !0,
      list: [1, 2, 3]
    },
    {
      "#LoopKey": 1
    },
    {
      "#LoopKey": 2
    },
    {
      "#LoopKey": 3
    }]),
    "__tests__/template.marko_0_list 1 __tests__/template.marko_0_open 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("#toggle").click();
```
```html
<ul
  hidden=""
>
  <li>
    1
    <!--M_*2 #text/0-->
  </li>
  <li>
    2
    <!--M_*3 #text/0-->
  </li>
  <li>
    3
    <!--M_*4 #text/0-->
  </li>
  <!--M_}1 #ul/0 4 3 2-->
</ul>
<button
  id="toggle"
>
  Toggle
</button>
<!--M_*1 #button/1-->
<button
  id="reverse"
>
  Reverse
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      open: !0,
      list: [1, 2, 3]
    },
    {
      "#LoopKey": 1
    },
    {
      "#LoopKey": 2
    },
    {
      "#LoopKey": 3
    }]),
    "__tests__/template.marko_0_list 1 __tests__/template.marko_0_open 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE ul[hidden] null => ""
```

# Render
```js
container.querySelector("#toggle").click();
```
```html
<ul>
  <li>
    1
    <!--M_*2 #text/0-->
  </li>
  <li>
    2
    <!--M_*3 #text/0-->
  </li>
  <li>
    3
    <!--M_*4 #text/0-->
  </li>
  <!--M_}1 #ul/0 4 3 2-->
</ul>
<button
  id="toggle"
>
  Toggle
</button>
<!--M_*1 #button/1-->
<button
  id="reverse"
>
  Reverse
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      open: !0,
      list: [1, 2, 3]
    },
    {
      "#LoopKey": 1
    },
    {
      "#LoopKey": 2
    },
    {
      "#LoopKey": 3
    }]),
    "__tests__/template.marko_0_list 1 __tests__/template.marko_0_open 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE ul[hidden] "" => null
```

# Render
```js
container.querySelector("#reverse").click();
```
```html
<ul>
  <li>
    3
    <!--M_*4 #text/0-->
  </li>
  <li>
    2
    <!--M_*3 #text/0-->
  </li>
  <li>
    1
    <!--M_*2 #text/0-->
  </li>
  <!--M_}1 #ul/0 4 3 2-->
</ul>
<button
  id="toggle"
>
  Toggle
</button>
<!--M_*1 #button/1-->
<button
  id="reverse"
>
  Reverse
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      open: !0,
      list: [1, 2, 3]
    },
    {
      "#LoopKey": 1
    },
    {
      "#LoopKey": 2
    },
    {
      "#LoopKey": 3
    }]),
    "__tests__/template.marko_0_list 1 __tests__/template.marko_0_open 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE ul/li1 after ul/li2
INSERT ul/li1
REMOVE ul/li0 after ul/li2
INSERT ul/li0
```