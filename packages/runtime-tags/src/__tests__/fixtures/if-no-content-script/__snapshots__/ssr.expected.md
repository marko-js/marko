# Write
```html
  <div></div><!--M_*1 #div/0--><button>0<!--M_*1 #text/2--></button><!--M_*1 #button/1--><!--M_[--><!--M_]1 #text/3 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={count:0},{_:_.a}]),"__tests__/template.marko_1 2 __tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<div />
<!--M_*1 #div/0-->
<button>
  0
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/1-->
<!--M_[-->
<!--M_]1 #text/3 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      count: 0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1 2 __tests__/template.marko_0_count 1"
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
INSERT #comment0
INSERT button
INSERT button/#text
INSERT button/#comment
INSERT #comment1
INSERT #comment2
INSERT #comment3
INSERT script
INSERT script/#text
```