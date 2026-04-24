# Write
```html
  <div></div><!--M_*1 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={},{"#scopeOffset/1":4,input:_.a={foo:"bar"},x:"bar"}],_.a.output=_._["__tests__/template.marko_0_#div"](_.c),_.b),"__tests__/tags/child.marko_0_input_x 2"];M._.w()</script>
```

# Render End
```html
<div />
<!--M_*1 #div/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {},
    {
      "#scopeOffset/1": 4,
      input: _.a = {
        foo: "bar"
      },
      x: "bar"
    }], _.a.output = _._[
      "__tests__/template.marko_0_#div"
      ](_.c), _.b),
    "__tests__/tags/child.marko_0_input_x 2"
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