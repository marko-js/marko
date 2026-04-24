# Write
```html
  <div></div><!--M_*1 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={},{_:_.a},{"#scopeOffset/1":5,input:_.b={foo:"bar"},x:"bar"}],_.b.output=_._["__tests__/template.marko_0_#div"](_.a),_.c),"__tests__/tags/child.marko_0_input_x 3"];M._.w()</script>
```

# Render End
```html
<div />
<!--M_*1 #div/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {},
    {
      _: _.a
    },
    {
      "#scopeOffset/1": 5,
      input: _.b = {
        foo: "bar"
      },
      x: "bar"
    }], _.b.output = _._[
      "__tests__/template.marko_0_#div"
      ](_.a), _.c),
    "__tests__/tags/child.marko_0_input_x 3"
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