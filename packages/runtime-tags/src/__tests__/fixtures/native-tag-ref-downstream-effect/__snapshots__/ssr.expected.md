# Write
```html
  <div></div><!--M_*1 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={},{_:_.a}]),"__tests__/template.marko_1 2"];M._.w()</script>
```

# Render End
```html
<div />
<!--M_*1 #div/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {},
    {
      _: _.a
    }]),
    "__tests__/template.marko_1 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div
INSERT #comment
INSERT script
INSERT script/#text
```