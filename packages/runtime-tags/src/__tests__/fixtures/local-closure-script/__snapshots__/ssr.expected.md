# Write
```html
  <div></div><!--M_*4 #div/0--><div></div><!--M_*6 #div/0--><div></div><!--M_*8 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,3,{item:1},1,{item:2},1,{item:3}]),"__tests__/template.marko_1_item 4 6 8"];M._.w()</script>
```

# Render End
```html
<div />
<!--M_*4 #div/0-->
<div />
<!--M_*6 #div/0-->
<div />
<!--M_*8 #div/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0, 3,
    {
      item: 1
    }, 1,
    {
      item: 2
    }, 1,
    {
      item: 3
    }]),
    "__tests__/template.marko_1_item 4 6 8"
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
INSERT #comment0
INSERT div1
INSERT #comment1
INSERT div2
INSERT #comment2
INSERT script
INSERT script/#text
```