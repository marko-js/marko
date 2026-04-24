# Write
```html
  <div>1</div><!--M_*2 #div/0--><div>content</div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{rest:{}}]),"__tests__/tags/child.marko_0_rest 2"];M._.w()</script>
```

# Render End
```html
<div>
  1
</div>
<!--M_*2 #div/0-->
<div>
  content
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0, 1,
    {
      rest:
      {}
    }]),
    "__tests__/tags/child.marko_0_rest 2"
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
INSERT #comment
INSERT div1
INSERT div1/#text
INSERT script
INSERT script/#text
```