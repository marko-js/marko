# Write
```html
  <div>1<!--M_*2 #text/0--></div><!--M_[--><div>1<!--M_*4 #text/0--></div><!--M_]1 #text/1 3--><button>1<!--M_*1 #text/3--></button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={x:1,"ClosureScopes:x":_.c=new Set},_.d={_:_.a},1,_.e={_:_.a,"#ClosestBranchId":3}],(_.c).add(_.d),_.c.add(_.e),_.b),"__tests__/template.marko_0_x 1"];M._.w()</script>
```

# Render End
```html
<div>
  1
  <!--M_*2 #text/0-->
</div>
<!--M_[-->
<div>
  1
  <!--M_*4 #text/0-->
</div>
<!--M_]1 #text/1 3-->
<button>
  1
  <!--M_*1 #text/3-->
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      x: 1,
      "ClosureScopes:x": _.c = new Set
    }, _.d = {
      _: _.a
    }, 1, _.e = {
      _: _.a,
      "#ClosestBranchId": 3
    }], (_.c).add(_.d), _.c.add(_.e), _.b),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div0
INSERT div0/#text
INSERT div0/#comment
INSERT #comment0
INSERT div1
INSERT div1/#text
INSERT div1/#comment
INSERT #comment1
INSERT button
INSERT button/#text
INSERT button/#comment
INSERT #comment2
INSERT script
INSERT script/#text
```