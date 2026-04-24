# Render
```html
<div
  data-children="1"
>
  <div />
  <!--M_}1 #div/0 2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      children: [1]
    }]),
    "__tests__/template.marko_0_children 1"
  ];
  M._.w()
</script>
```


# Render ASYNC
```html
<div
  data-children="2"
>
  <div />
  <!--M_}1 #div/0 2-->
  <div />
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      children: [1]
    }]),
    "__tests__/template.marko_0_children 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div[data-children] "1" => "2"
INSERT div/div1
```