# Render
```html
<button>
  0
</button>
<!--M_*2 #button/0-->
<!--M_|1 #text/0 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      num: 0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1_num 2"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  0
</button>
<button>
  1
</button>
<!--M_*2 #button/0-->
<!--M_|1 #text/0 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      num: 0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1_num 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT button1
UPDATE button1/#text " " => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  0
</button>
<button>
  1
</button>
<button>
  2
</button>
<!--M_*2 #button/0-->
<!--M_|1 #text/0 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      num: 0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1_num 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT button2
UPDATE button2/#text " " => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  0
</button>
<button>
  1
</button>
<button>
  2
</button>
<button>
  3
</button>
<!--M_*2 #button/0-->
<!--M_|1 #text/0 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      num: 0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1_num 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT button3
UPDATE button3/#text " " => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  0
</button>
<button>
  1
</button>
<button>
  2
</button>
<button>
  3
</button>
<button>
  4
</button>
<!--M_*2 #button/0-->
<!--M_|1 #text/0 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      num: 0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1_num 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT button4
UPDATE button4/#text " " => "4"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  0
</button>
<button>
  1
</button>
<button>
  2
</button>
<button>
  3
</button>
<button>
  4
</button>
<button>
  5
</button>
<!--M_*2 #button/0-->
<!--M_|1 #text/0 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      num: 0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1_num 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT button5
UPDATE button5/#text " " => "5"
```