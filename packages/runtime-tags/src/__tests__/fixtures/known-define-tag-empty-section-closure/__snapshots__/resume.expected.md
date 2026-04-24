# Render
```html
<div>
  <!--M_[-->
  <!--M_]1 #text/0-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0]),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```


# Render ASYNC
```html
<div>
  <!--M_[-->
  <!---->
  <!---->
  <!---->
  <div>
    123
  </div>
  <!---->
  <!---->
  <!---->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0]),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/#comment1, div/#comment2, div/#comment3, #text, div/#comment4, div/#comment5, div/#comment6
REMOVE #comment after div/#comment6
INSERT div/div
REMOVE #text after div/div
UPDATE div/div/#text " " => "123"
```