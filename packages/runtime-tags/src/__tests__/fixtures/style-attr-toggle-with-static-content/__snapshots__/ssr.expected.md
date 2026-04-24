# Write
```html
  <button></button><!--M_*1 #button/0--><div style="border:1px solid black">foo bar</div><!--M_*1 #div/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{open:!0}]),"__tests__/template.marko_0_open 1"];M._.w()</script>
```

# Render End
```html
<button />
<!--M_*1 #button/0-->
<div
  style="border:1px solid black"
>
  foo bar
</div>
<!--M_*1 #div/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      open: !0
    }]),
    "__tests__/template.marko_0_open 1"
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
INSERT #comment0
INSERT div
INSERT div/#text
INSERT #comment1
INSERT script
INSERT script/#text
```