# Render
```html
<button>
  0
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
used to be
<span>
  0
  <!--M_*1 #text/2-->
</span>
which should be the same as
<span>
  0
  <!--M_*1 #text/3-->
</span>
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
<button>
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
used to be
<span>
  0
  <!--M_*1 #text/2-->
</span>
which should be the same as
<span>
  0
  <!--M_*1 #text/3-->
</span>
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
UPDATE button/#text "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
used to be
<span>
  1
  <!--M_*1 #text/2-->
</span>
which should be the same as
<span>
  1
  <!--M_*1 #text/3-->
</span>
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
UPDATE button/#text "1" => "2"
UPDATE span0/#text "0" => "1"
UPDATE span1/#text "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  3
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
used to be
<span>
  2
  <!--M_*1 #text/2-->
</span>
which should be the same as
<span>
  2
  <!--M_*1 #text/3-->
</span>
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
UPDATE button/#text "2" => "3"
UPDATE span0/#text "1" => "2"
UPDATE span1/#text "1" => "2"
```