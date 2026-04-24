# Render
```html
<div>
  <button>
    0
    <!--M_*1 #text/1-->
  </button>
  <!--M_*1 #button/0-->
  <div />
  <!--M_*1 #div/2-->
  <div />
  <!--M_*1 #div/3-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      clickCount: 0
    }]),
    "__tests__/template.marko_0_clickCount 1"
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
    <!--M_*1 #text/1-->
  </button>
  <!--M_*1 #button/0-->
  <div>
    0
  </div>
  <!--M_*1 #div/2-->
  <div>
    1
  </div>
  <!--M_*1 #div/3-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      clickCount: 0
    }]),
    "__tests__/template.marko_0_clickCount 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/div0/#text
INSERT div/div1/#text
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
    <!--M_*1 #text/1-->
  </button>
  <!--M_*1 #button/0-->
  <div>
    1
  </div>
  <!--M_*1 #div/2-->
  <div>
    2
  </div>
  <!--M_*1 #div/3-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      clickCount: 0
    }]),
    "__tests__/template.marko_0_clickCount 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #text in div/div0
INSERT div/div0/#text
REMOVE #text in div/div1
INSERT div/div1/#text
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
    <!--M_*1 #text/1-->
  </button>
  <!--M_*1 #button/0-->
  <div>
    2
  </div>
  <!--M_*1 #div/2-->
  <div>
    3
  </div>
  <!--M_*1 #div/3-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      clickCount: 0
    }]),
    "__tests__/template.marko_0_clickCount 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #text in div/div0
INSERT div/div0/#text
REMOVE #text in div/div1
INSERT div/div1/#text
UPDATE div/button/#text "2" => "3"
```