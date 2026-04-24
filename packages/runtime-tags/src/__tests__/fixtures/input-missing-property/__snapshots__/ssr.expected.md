# Write
```html
  <button>0<!--M_*1 #text/1--></button><!--M_*1 #button/0--><!--M_[--><!--M_]2 #text/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,{count:0,"#childScope/2":_.a={}},_.a]),"__tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<button>
  0
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<!--M_[-->
<!--M_]2 #text/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      count: 0,
      "#childScope/2": _.a = {}
    }, _.a]),
    "__tests__/template.marko_0_count 1"
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
INSERT #comment1
INSERT #comment2
INSERT script
INSERT script/#text
```