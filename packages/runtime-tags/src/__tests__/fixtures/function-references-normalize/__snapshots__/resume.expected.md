# Render
```html
<div>
  bar
</div>
<!--M_*1 #div/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.d = {
      foo: _.a = {
        bar: "bar"
      },
      baz: _.b = {
        foo: _.a
      }
    }], _.b.bar = _._[
      "__tests__/template.marko_0/baz"
      ](_.d), _.c),
    "__tests__/template.marko_0_baz 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/#text
```