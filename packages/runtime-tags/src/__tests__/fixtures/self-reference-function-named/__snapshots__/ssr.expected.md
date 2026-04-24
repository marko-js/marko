# Write
```html
  <button></button><!--M_*1 #button/0--><div>3<!--M_*1 #text/1--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{items:[0,1,2]}]),"__tests__/template.marko_0_items 1"];M._.w()</script>
```

# Render End
```html
<button />
<!--M_*1 #button/0-->
<div>
  3
  <!--M_*1 #text/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      items: [0, 1, 2]
    }]),
    "__tests__/template.marko_0_items 1"
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
INSERT #comment
INSERT div
INSERT div/#text
INSERT div/#comment
INSERT script
INSERT script/#text
```