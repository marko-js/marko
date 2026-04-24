# Write
```html
  <button>0<!--M_*3 #text/1--></button><!--M_*3 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={count:0,"ClosureScopes:count":_.c=new Set},1,_.d={_:_.a}],(_.c).add(_.d),_.b),"__tests__/template.marko_1_count 3"];M._.w()</script>
```

# Render End
```html
<button>
  0
  <!--M_*3 #text/1-->
</button>
<!--M_*3 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      count: 0,
      "ClosureScopes:count": _.c = new Set
    }, 1, _.d = {
      _: _.a
    }], (_.c).add(_.d), _.b),
    "__tests__/template.marko_1_count 3"
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
INSERT #comment
INSERT script
INSERT script/#text
```