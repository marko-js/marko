# Write
```html
  <button>Toggle</button><!--M_*1 #button/0--><div></div><!--M_*1 #div/1--><div>child</div><!--M_|1 #text/2 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={show:!0},_.d={_:_.a},{input:_.b={},"#ClosestBranchId":2}],_.b.write=_._["__tests__/template.marko_1/write"](_.d),_.c),"__tests__/tags/child.marko_0_input 3 __tests__/template.marko_0_show 1"];M._.w()</script>
```

# Render End
```html
<button>
  Toggle
</button>
<!--M_*1 #button/0-->
<div />
<!--M_*1 #div/1-->
<div>
  child
</div>
<!--M_|1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      show: !0
    }, _.d = {
      _: _.a
    },
    {
      input: _.b = {},
      "#ClosestBranchId": 2
    }], _.b.write = _._[
      "__tests__/template.marko_1/write"
      ](_.d), _.c),
    "__tests__/tags/child.marko_0_input 3 __tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT button
INSERT button/#text
INSERT #comment0
INSERT div0
INSERT #comment1
INSERT div1
INSERT div1/#text
INSERT #comment2
INSERT script
INSERT script/#text
```