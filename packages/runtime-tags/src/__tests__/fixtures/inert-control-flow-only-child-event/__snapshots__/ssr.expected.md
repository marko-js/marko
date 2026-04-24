# Write
```html
  <div id=target><span data-selected>0</span><!--M_*2 #span/0--><span>1</span><!--M_*3 #span/0--><span>2</span><!--M_*4 #span/0--></div><!--M_*1 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.e=[0,_.a={"BranchScopes:#div/0":[_.b={"#LoopKey":0},_.c={"#LoopKey":1},_.d={"#LoopKey":2}],selected:0},_.b,_.c,_.d],_.b._=_.c._=_.d._=_.a,_.e),"__tests__/template.marko_0_selected 1"];M._.w()</script>
```

# Render End
```html
<div
  id="target"
>
  <span
    data-selected=""
  >
    0
  </span>
  <!--M_*2 #span/0-->
  <span>
    1
  </span>
  <!--M_*3 #span/0-->
  <span>
    2
  </span>
  <!--M_*4 #span/0-->
</div>
<!--M_*1 #div/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.e = [0, _.a = {
      "BranchScopes:#div/0": [_.b = {
        "#LoopKey": 0
      }, _.c = {
        "#LoopKey": 1
      }, _.d = {
        "#LoopKey": 2
      }],
      selected: 0
    }, _.b, _.c, _.d], _.b._ = _.c._ = _.d._ = _.a, _.e),
    "__tests__/template.marko_0_selected 1"
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
INSERT div/span0
INSERT div/span0/#text
INSERT div/#comment0
INSERT div/span1
INSERT div/span1/#text
INSERT div/#comment1
INSERT div/span2
INSERT div/span2/#text
INSERT div/#comment2
INSERT #comment
INSERT script
INSERT script/#text
```