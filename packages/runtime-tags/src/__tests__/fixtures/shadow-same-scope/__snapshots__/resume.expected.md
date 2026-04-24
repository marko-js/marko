# Render
```html
<div>
  <button>
    0
    <!--M_*1 #text/1-->
  </button>
  <!--M_*1 #button/0-->
  <div>
    <button>
      0
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <div>
      <button>
        0
        <!--M_*1 #text/5-->
      </button>
      <!--M_*1 #button/4-->
    </div>
  </div>
</div>
<div>
  <button>
    0
    <!--M_*1 #text/7-->
  </button>
  <!--M_*1 #button/6-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0,
      $count: 0,
      $count2: 0,
      $count3: 0
    }]),
    "__tests__/template.marko_0_$count3 1 __tests__/template.marko_0_$count2 1 __tests__/template.marko_0_$count 1 __tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelectorAll("button")[buttonNum++].click();
```
```html
<div>
  <button>
    1
    <!--M_*1 #text/1-->
  </button>
  <!--M_*1 #button/0-->
  <div>
    <button>
      0
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <div>
      <button>
        0
        <!--M_*1 #text/5-->
      </button>
      <!--M_*1 #button/4-->
    </div>
  </div>
</div>
<div>
  <button>
    0
    <!--M_*1 #text/7-->
  </button>
  <!--M_*1 #button/6-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0,
      $count: 0,
      $count2: 0,
      $count3: 0
    }]),
    "__tests__/template.marko_0_$count3 1 __tests__/template.marko_0_$count2 1 __tests__/template.marko_0_$count 1 __tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div0/button/#text "0" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonNum++].click();
```
```html
<div>
  <button>
    1
    <!--M_*1 #text/1-->
  </button>
  <!--M_*1 #button/0-->
  <div>
    <button>
      1
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <div>
      <button>
        0
        <!--M_*1 #text/5-->
      </button>
      <!--M_*1 #button/4-->
    </div>
  </div>
</div>
<div>
  <button>
    0
    <!--M_*1 #text/7-->
  </button>
  <!--M_*1 #button/6-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0,
      $count: 0,
      $count2: 0,
      $count3: 0
    }]),
    "__tests__/template.marko_0_$count3 1 __tests__/template.marko_0_$count2 1 __tests__/template.marko_0_$count 1 __tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div0/div/button/#text "0" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonNum++].click();
```
```html
<div>
  <button>
    1
    <!--M_*1 #text/1-->
  </button>
  <!--M_*1 #button/0-->
  <div>
    <button>
      1
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <div>
      <button>
        1
        <!--M_*1 #text/5-->
      </button>
      <!--M_*1 #button/4-->
    </div>
  </div>
</div>
<div>
  <button>
    0
    <!--M_*1 #text/7-->
  </button>
  <!--M_*1 #button/6-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0,
      $count: 0,
      $count2: 0,
      $count3: 0
    }]),
    "__tests__/template.marko_0_$count3 1 __tests__/template.marko_0_$count2 1 __tests__/template.marko_0_$count 1 __tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div0/div/div/button/#text "0" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonNum++].click();
```
```html
<div>
  <button>
    1
    <!--M_*1 #text/1-->
  </button>
  <!--M_*1 #button/0-->
  <div>
    <button>
      1
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <div>
      <button>
        1
        <!--M_*1 #text/5-->
      </button>
      <!--M_*1 #button/4-->
    </div>
  </div>
</div>
<div>
  <button>
    1
    <!--M_*1 #text/7-->
  </button>
  <!--M_*1 #button/6-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0,
      $count: 0,
      $count2: 0,
      $count3: 0
    }]),
    "__tests__/template.marko_0_$count3 1 __tests__/template.marko_0_$count2 1 __tests__/template.marko_0_$count 1 __tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div1/button/#text "0" => "1"
```

# Render
```js
buttonNum = 0;
```
```html
<div>
  <button>
    1
    <!--M_*1 #text/1-->
  </button>
  <!--M_*1 #button/0-->
  <div>
    <button>
      1
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <div>
      <button>
        1
        <!--M_*1 #text/5-->
      </button>
      <!--M_*1 #button/4-->
    </div>
  </div>
</div>
<div>
  <button>
    1
    <!--M_*1 #text/7-->
  </button>
  <!--M_*1 #button/6-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0,
      $count: 0,
      $count2: 0,
      $count3: 0
    }]),
    "__tests__/template.marko_0_$count3 1 __tests__/template.marko_0_$count2 1 __tests__/template.marko_0_$count 1 __tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```
