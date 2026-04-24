# Render
```html
<button
  id="tags"
>
  0
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<!--M_[-->
<button
  data-parent="0"
  id="class"
>
  0
</button>
<!--M_]1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
    "ConditionalRenderer:#text/2": _._[
      "__tests__/components/class-counter.marko"
      ],
    count: 0
  },
  {
    m5c: "_0",
    m5i:
    {
      count: 0
    }
  }], _.a["ConditionalRenderer:#text/2"] = _._.$compat_renderer(_.a[
    "ConditionalRenderer:#text/2"]), _.b)];
  M._.w();
  $MC = (window.$MC || []).concat(
  {
    "p": "_",
    "w": [
      ["_0", 0, 2,
      {
        "f": 1
      }]
    ],
    "t": [
      "__tests__/components/class-counter.marko"
    ]
  });
  M._.r.push(
    "$compat_setScope 2 __tests__/template.marko_0_count 1"
    );
  M._.w()
</script>
```

# Mutations
```
INSERT #text2
INSERT #text0
INSERT #text1
REMOVE #comment after #comment1
REMOVE #comment after #text1
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<!--M_[-->
<button
  data-parent="1"
  id="class"
>
  0
</button>
<!--M_]1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
    "ConditionalRenderer:#text/2": _._[
      "__tests__/components/class-counter.marko"
      ],
    count: 0
  },
  {
    m5c: "_0",
    m5i:
    {
      count: 0
    }
  }], _.a["ConditionalRenderer:#text/2"] = _._.$compat_renderer(_.a[
    "ConditionalRenderer:#text/2"]), _.b)];
  M._.w();
  $MC = (window.$MC || []).concat(
  {
    "p": "_",
    "w": [
      ["_0", 0, 2,
      {
        "f": 1
      }]
    ],
    "t": [
      "__tests__/components/class-counter.marko"
    ]
  });
  M._.r.push(
    "$compat_setScope 2 __tests__/template.marko_0_count 1"
    );
  M._.w()
</script>
```

# Mutations
```
UPDATE button0/#text "0" => "1"
UPDATE button1[data-parent] "0" => "1"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<button
  id="tags"
>
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<!--M_[-->
<button
  data-parent="1"
  id="class"
>
  1
</button>
<!--M_]1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
    "ConditionalRenderer:#text/2": _._[
      "__tests__/components/class-counter.marko"
      ],
    count: 0
  },
  {
    m5c: "_0",
    m5i:
    {
      count: 0
    }
  }], _.a["ConditionalRenderer:#text/2"] = _._.$compat_renderer(_.a[
    "ConditionalRenderer:#text/2"]), _.b)];
  M._.w();
  $MC = (window.$MC || []).concat(
  {
    "p": "_",
    "w": [
      ["_0", 0, 2,
      {
        "f": 1
      }]
    ],
    "t": [
      "__tests__/components/class-counter.marko"
    ]
  });
  M._.r.push(
    "$compat_setScope 2 __tests__/template.marko_0_count 1"
    );
  M._.w()
</script>
```

# Mutations
```
UPDATE button1/#text "0" => "1"
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  2
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<!--M_[-->
<button
  data-parent="2"
  id="class"
>
  1
</button>
<!--M_]1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
    "ConditionalRenderer:#text/2": _._[
      "__tests__/components/class-counter.marko"
      ],
    count: 0
  },
  {
    m5c: "_0",
    m5i:
    {
      count: 0
    }
  }], _.a["ConditionalRenderer:#text/2"] = _._.$compat_renderer(_.a[
    "ConditionalRenderer:#text/2"]), _.b)];
  M._.w();
  $MC = (window.$MC || []).concat(
  {
    "p": "_",
    "w": [
      ["_0", 0, 2,
      {
        "f": 1
      }]
    ],
    "t": [
      "__tests__/components/class-counter.marko"
    ]
  });
  M._.r.push(
    "$compat_setScope 2 __tests__/template.marko_0_count 1"
    );
  M._.w()
</script>
```

# Mutations
```
UPDATE button0/#text "1" => "2"
UPDATE button1[data-parent] "1" => "2"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<button
  id="tags"
>
  2
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<!--M_[-->
<button
  data-parent="2"
  id="class"
>
  2
</button>
<!--M_]1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
    "ConditionalRenderer:#text/2": _._[
      "__tests__/components/class-counter.marko"
      ],
    count: 0
  },
  {
    m5c: "_0",
    m5i:
    {
      count: 0
    }
  }], _.a["ConditionalRenderer:#text/2"] = _._.$compat_renderer(_.a[
    "ConditionalRenderer:#text/2"]), _.b)];
  M._.w();
  $MC = (window.$MC || []).concat(
  {
    "p": "_",
    "w": [
      ["_0", 0, 2,
      {
        "f": 1
      }]
    ],
    "t": [
      "__tests__/components/class-counter.marko"
    ]
  });
  M._.r.push(
    "$compat_setScope 2 __tests__/template.marko_0_count 1"
    );
  M._.w()
</script>
```

# Mutations
```
UPDATE button1/#text "1" => "2"
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  3
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<!--M_[-->
<button
  data-parent="3"
  id="class"
>
  2
</button>
<!--M_]1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
    "ConditionalRenderer:#text/2": _._[
      "__tests__/components/class-counter.marko"
      ],
    count: 0
  },
  {
    m5c: "_0",
    m5i:
    {
      count: 0
    }
  }], _.a["ConditionalRenderer:#text/2"] = _._.$compat_renderer(_.a[
    "ConditionalRenderer:#text/2"]), _.b)];
  M._.w();
  $MC = (window.$MC || []).concat(
  {
    "p": "_",
    "w": [
      ["_0", 0, 2,
      {
        "f": 1
      }]
    ],
    "t": [
      "__tests__/components/class-counter.marko"
    ]
  });
  M._.r.push(
    "$compat_setScope 2 __tests__/template.marko_0_count 1"
    );
  M._.w()
</script>
```

# Mutations
```
UPDATE button0/#text "2" => "3"
UPDATE button1[data-parent] "2" => "3"
```