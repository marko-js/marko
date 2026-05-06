# Write
```html
  <button>0<!--M_*1 #text/1--></button><!--M_*1 #button/0--><input type=text placeholder="foo ${ bar"><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{count:0}]),"__tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<button>
  0
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<input
  placeholder="foo ${ bar"
  type="text"
/>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0
    }]),
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
INSERT #comment
INSERT input
INSERT script
INSERT script/#text
```