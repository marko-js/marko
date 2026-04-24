# Render
```html
<div>
  <button>
    0
    <!--Membedded*1 #text/1-->
  </button>
  <!--Membedded*1 #button/0-->
</div>
<script>
  WALKER_RUNTIME("M")("embedded");
  (M.embedded.b = {})[
    "__tests__/template.marko"
    ] = 1;
  M.embedded.r = [_ =&gt; (_.a = [0,
    {
      clickCount: 0
    }]),
    "__tests__/template.marko_0_clickCount 1"
  ];
  M.embedded.w()
</script>
```

# Mutations
```
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    1
    <!--Membedded*1 #text/1-->
  </button>
  <!--Membedded*1 #button/0-->
</div>
<script>
  WALKER_RUNTIME("M")("embedded");
  (M.embedded.b = {})[
    "__tests__/template.marko"
    ] = 1;
  M.embedded.r = [_ =&gt; (_.a = [0,
    {
      clickCount: 0
    }]),
    "__tests__/template.marko_0_clickCount 1"
  ];
  M.embedded.w()
</script>
```

# Mutations
```
UPDATE div/button/#text "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    2
    <!--Membedded*1 #text/1-->
  </button>
  <!--Membedded*1 #button/0-->
</div>
<script>
  WALKER_RUNTIME("M")("embedded");
  (M.embedded.b = {})[
    "__tests__/template.marko"
    ] = 1;
  M.embedded.r = [_ =&gt; (_.a = [0,
    {
      clickCount: 0
    }]),
    "__tests__/template.marko_0_clickCount 1"
  ];
  M.embedded.w()
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
  <button>
    3
    <!--Membedded*1 #text/1-->
  </button>
  <!--Membedded*1 #button/0-->
</div>
<script>
  WALKER_RUNTIME("M")("embedded");
  (M.embedded.b = {})[
    "__tests__/template.marko"
    ] = 1;
  M.embedded.r = [_ =&gt; (_.a = [0,
    {
      clickCount: 0
    }]),
    "__tests__/template.marko_0_clickCount 1"
  ];
  M.embedded.w()
</script>
```

# Mutations
```
UPDATE div/button/#text "2" => "3"
```