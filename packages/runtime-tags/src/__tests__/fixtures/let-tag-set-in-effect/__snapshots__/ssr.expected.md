# Write
```html
  <span>1<!--M_*1 #text/0--></span><span>0<!--M_*1 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{x:1}]),"__tests__/template.marko_0_x 1"];M._.w()</script>
```

# Render End
```html
<span>
  1
  <!--M_*1 #text/0-->
</span>
<span>
  0
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: 1
    }]),
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
INSERT span0
INSERT span0/#text
INSERT span0/#comment
INSERT span1
INSERT span1/#text
INSERT span1/#comment
INSERT script
INSERT script/#text
```