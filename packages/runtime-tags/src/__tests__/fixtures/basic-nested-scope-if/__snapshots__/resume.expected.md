# Render
```html
<div>
  <button>
    0
    <!--M_*2 #text/1-->
  </button>
  <!--M_*2 #button/0-->
  <!--M_|1 #text/0 2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      clickCount: 0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1_clickCount 2"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    1
  </button>
  <!--M_*2 #button/0-->
  <!--M_|1 #text/0 2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      clickCount: 0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1_clickCount 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/button
REMOVE button after div/button
UPDATE div/button/#text " " => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    2
  </button>
  <!--M_*2 #button/0-->
  <!--M_|1 #text/0 2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      clickCount: 0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1_clickCount 2"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/button/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <span>
    The button was clicked 3 times.
  </span>
  <!--M_*2 #button/0-->
  <!--M_|1 #text/0 2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      clickCount: 0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1_clickCount 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/span
REMOVE button after div/span
UPDATE div/span/#text1 "" => "3"
```