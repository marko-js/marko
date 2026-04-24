# Write
```html
  <div>one</div><!--M_*2 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{htmlInput:{}}]),"__tests__/tags/child.marko_0_htmlInput 2"];M._.w()</script>
```

# Render End
```html
<div>
  one
</div>
<!--M_*2 #div/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0, 1,
    {
      htmlInput:
      {}
    }]),
    "__tests__/tags/child.marko_0_htmlInput 2"
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
INSERT #comment
INSERT script
INSERT script/#text
```