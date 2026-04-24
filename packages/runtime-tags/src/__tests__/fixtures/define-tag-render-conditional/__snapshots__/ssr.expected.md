# Write
```html
  <!--M_[--><div>Hello <!>1<!--M_*3 #text/0--></div><!--M_]1 #text/0 2--><button>1<!--M_*1 #text/2--></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={x:1},{_:_.a,"#childScope/0":_.b={}},_.b]),"__tests__/template.marko_0_x 1"];M._.w()</script>
```

# Render End
```html
<!--M_[-->
<div>
  Hello 
  <!---->
  1
  <!--M_*3 #text/0-->
</div>
<!--M_]1 #text/0 2-->
<button>
  1
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      x: 1
    },
    {
      _: _.a,
      "#childScope/0": _.b = {}
    }, _.b]),
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
INSERT #comment0
INSERT div
INSERT div/#text0
INSERT div/#comment0
INSERT div/#text1
INSERT div/#comment1
INSERT #comment1
INSERT button
INSERT button/#text
INSERT button/#comment
INSERT #comment2
INSERT script
INSERT script/#text
```