# Write
```html
  <button>0<!--M_*1 #text/1--></button><!--M_*1 #button/0--><div>0<!--M_*2 #text/0--></div><!--M_*1 #div/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"BranchScopes:#div/2":_.b={},count:0},_.b],_.b._=_.a,_.c),"__tests__/template.marko_0 1 __tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<button>
  0
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<div>
  0
  <!--M_*2 #text/0-->
</div>
<!--M_*1 #div/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      "BranchScopes:#div/2": _.b = {},
      count: 0
    }, _.b], _.b._ = _.a, _.c),
    "__tests__/template.marko_0 1 __tests__/template.marko_0_count 1"
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
INSERT button/#comment
INSERT #comment0
INSERT div
INSERT div/#text
INSERT div/#comment
INSERT #comment1
INSERT script
INSERT script/#text
```