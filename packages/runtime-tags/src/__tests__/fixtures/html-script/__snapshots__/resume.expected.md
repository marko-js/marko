# Render
```html
<script
  type="importmap"
>
  {
    "imports":
    {
      "0": "https://markojs.com",
    }
  }
</script>
<!--M_*1 #script/0-->
<div>
  0
  <!--M_*1 #text/1-->
</div>
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
container.querySelector("script").click();
```
```html
<script
  type="importmap"
>
  {
    "imports":
    {
      "1": "https://markojs.com",
    }
  }
</script>
<!--M_*1 #script/0-->
<div>
  1
  <!--M_*1 #text/1-->
</div>
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
REMOVE #text in script0
INSERT script0/#text
UPDATE div/#text "0" => "1"
```

# Render
```js
container.querySelector("script").click();
```
```html
<script
  type="importmap"
>
  {
    "imports":
    {
      "2": "https://markojs.com",
    }
  }
</script>
<!--M_*1 #script/0-->
<div>
  2
  <!--M_*1 #text/1-->
</div>
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
REMOVE #text in script0
INSERT script0/#text
UPDATE div/#text "1" => "2"
```

# Render
```js
container.querySelector("script").click();
```
```html
<script
  type="importmap"
>
  {
    "imports":
    {
      "3": "https://markojs.com",
    }
  }
</script>
<!--M_*1 #script/0-->
<div>
  3
  <!--M_*1 #text/1-->
</div>
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
REMOVE #text in script0
INSERT script0/#text
UPDATE div/#text "2" => "3"
```