# Render
```html
<div>
  <!--M_[-->
  <!--M_)1 #div/0-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {}]),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```


# Render ASYNC
```html
<div>
  <!--M_[-->
  <!--M_)1 #div/0-->
  ABCD
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {}]),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/#text0, div/#text1, div/#text2
UPDATE div/#text1 "" => "C"
```