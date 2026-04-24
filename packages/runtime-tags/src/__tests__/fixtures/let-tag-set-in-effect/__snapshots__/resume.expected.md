# Render
```html
<span>
  1
  <!--M_*1 #text/0-->
</span>
<span>
  0
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: 1
    }]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```


# Render ASYNC
```html
<span>
  2
  <!--M_*1 #text/0-->
</span>
<span>
  1
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: 1
    }]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE span0/#text "1" => "2"
UPDATE span1/#text "0" => "1"
```

# Render ASYNC
```html
<span>
  2
  <!--M_*1 #text/0-->
</span>
<span>
  2
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: 1
    }]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE span1/#text "1" => "2"
```