# Render
```html
<button>
  0
  <!--M_*1 #text/1-->
   
  <!---->
  0
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0
    }]),
    "__tests__/template.marko_0_count 1"
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
   
  <!---->
  1
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0
    }]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text0 "0" => "1"
UPDATE button/#text2 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2
  <!--M_*1 #text/1-->
   
  <!---->
  2
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0
    }]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text0 "1" => "2"
UPDATE button/#text2 "1" => "2"
```