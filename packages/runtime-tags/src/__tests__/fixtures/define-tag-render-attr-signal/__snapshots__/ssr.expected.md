# Write
```html
  <div>1<!--M_*2 #text/0--></div><button>1<!--M_*1 #text/2--></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,{x:1,"#childScope/0":_.a={}},_.a]),"__tests__/template.marko_0_x 1"];M._.w()</script>
```

# Render End
```html
<div>
  1
  <!--M_*2 #text/0-->
</div>
<button>
  1
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      x: 1,
      "#childScope/0": _.a = {}
    }, _.a]),
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
INSERT div
INSERT div/#text
INSERT div/#comment
INSERT button
INSERT button/#text
INSERT button/#comment
INSERT #comment
INSERT script
INSERT script/#text
```